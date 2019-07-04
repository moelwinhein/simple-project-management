import { Component, OnDestroy, OnInit } from '@angular/core';
import { DashboardService } from './dashboard.service';
import { Project } from '../models/project';
import { Topic } from '../models/topic';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit, OnDestroy {

  selectedService = 'projects';
  projects: Array<Project> = [];
  topics: Array<Topic> = [];
  isLoading = true;

  private readonly onInterrupted$ = new Subject<void>();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dashboardService: DashboardService) { }

  ngOnInit() {
    if (this.selectedService === 'projects') {
      this.isLoading = true;
      this.dashboardService.getProjects().pipe(takeUntil(this.onInterrupted$)).subscribe(res => {
        this.projects = res;
      }, err => { }, () => { this.isLoading = false; });
    } else if (this.selectedService === 'topics') {
      this.isLoading = true;
      this.dashboardService.getTopics().pipe(takeUntil(this.onInterrupted$)).subscribe(res => {
        this.topics = res;
      }, err => { }, () => { this.isLoading = false; });
    }
  }

  onLinkClick(linkName) {
    this.onInterrupted$.next();
    switch (linkName) {
      case 'projects':
        this.selectedService = linkName;
        this.isLoading = true;
        this.dashboardService.getProjects().pipe(takeUntil(this.onInterrupted$)).subscribe(res => {
          this.projects = res;
          console.log('projects');
        }, err => { }, () => { this.isLoading = false; });
        break;
      case 'topics':
        this.selectedService = linkName;
        this.isLoading = true;
        this.dashboardService.getTopics().pipe(takeUntil(this.onInterrupted$)).subscribe(res => {
          this.topics = res;
          console.log('topics');
        }, err => { }, () => { this.isLoading = false; });
        break;
      default:
        this.selectedService = '';
    }
  }

  onProjectRowClick(e) {
    console.log('Project row clicked: ' + e);
    this.router.navigate(['../project/detail'], {
      queryParams: {
        projectCode: e,
      },
      relativeTo: this.route,
    });
  }

  onTopicRowClick(e) {
    console.log('Topic row clicked: ' + e);
    this.router.navigate(['../topic/detail'], {
      queryParams: {
        topicCode: e,
      },
      relativeTo: this.route,
    });
  }

  ngOnDestroy(): void {
    this.onInterrupted$.next();
    this.onInterrupted$.complete();
  }

}
