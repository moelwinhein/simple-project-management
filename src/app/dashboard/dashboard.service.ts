import { Injectable } from '@angular/core';
import { Project } from '../models/project';
import { Topic } from '../models/topic';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor() { }

  getProjects(): Observable<Array<Project>> {
    const projects = [];
    const max = Math.floor(Math.random() * Math.floor(100));
    for (let i = 0; i < max; i++) {
      projects.push({
        projectName: 'Project ' + i,
        projectCode: i,
        progress: i,
        projectState: 'New',
      });
    }
    return of(projects).pipe(delay(Math.floor(Math.random() * Math.floor(3000))));
  }

  getTopics(): Observable<Array<Topic>> {
    const topics = [];
    const max = Math.floor(Math.random() * Math.floor(100));
    for (let i = 0; i < max; i++) {
      topics.push({
        topicName: 'Topic ' + i,
        topicCode: i,
        progress: i,
        topicState: 'New',
      });
    }
    return of(topics).pipe(delay(Math.floor(Math.random() * Math.floor(3000))));
  }
}
