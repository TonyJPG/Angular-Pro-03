import { sleep } from '@helpers/sleep';
import { environment } from 'src/environments/environment.development';
import { GitHubIssue } from '../interfaces';

const { BASE_URL, GITHUB_TOKEN } = environment;

export const getIssueByNumber = async (id: string): Promise<GitHubIssue> => {
  console.log('getIssueByNumber called!');
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/issues/${id}`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw new Error(`Can't load issue #${id}`);

    const issue: GitHubIssue = await resp.json();
    ('');
    return issue;
  } catch (error) {
    throw `Can't load issue #${id}`;
  }
};
