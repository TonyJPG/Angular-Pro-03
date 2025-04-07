import { sleep } from '@helpers/sleep';
import { environment } from 'src/environments/environment.development';
import { GitHubIssue } from '../interfaces';

const { BASE_URL, GITHUB_TOKEN } = environment;

export const getIssueCommentsByNumber = async (
  id: string,
): Promise<GitHubIssue[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues/${id}/comments`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw new Error(`Can't load the comments of issue #${id}`);

    const issueComments: GitHubIssue[] = await resp.json();

    console.log({ issueComments });
    return issueComments;
  } catch (error) {
    throw `Can't load the comments of issue #${id}`;
  }
};
