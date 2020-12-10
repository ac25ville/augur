import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { RepoInfoService } from 'src/app/repo-info.service'
import { Metric } from 'src/app/reposInfo';


@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.scss']
})
export class RepoComponent implements OnInit {

  repoId: number;

  commitMetric: Metric = Metric.commits;
  pullRequestMetric: Metric = Metric.pullRequests;
  committersMetric: Metric = Metric.committers;
  linesAddedMetric: Metric = Metric.linesAdded;


  constructor(private activatedRoute: ActivatedRoute, private repoInfoService: RepoInfoService) {
   }

   ngOnInit(): void {
    this.repoId = this.activatedRoute.snapshot.params['repoId'];
  }

}
