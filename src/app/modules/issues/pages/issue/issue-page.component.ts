import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map, tap } from 'rxjs';
import { IssueService } from '../../services/issue.service';
import { IssueCommentComponent } from '../../components/issue-comment/issue-comment.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'issue-page',
  standalone: true,
  imports: [RouterLink, IssueCommentComponent, CommonModule],
  templateUrl: './issue-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class IssuePageComponent {
  route = inject(ActivatedRoute);
  issueService = inject(IssueService);

  issueNumber = toSignal<string>(
    this.route.paramMap.pipe(
      map((params) => params.get('number') ?? ''),
      tap((issueId) => this.issueService.setIssueNumber(issueId)),
    ),
  );

  public issueQuery = this.issueService.issueQuery;
  public issueCommentsQuery = this.issueService.issueCommentsQuery;
}
