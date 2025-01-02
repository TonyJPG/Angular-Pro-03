import { sleep } from '@helpers/sleep';
import { GitHubLabel } from '../interfaces/github-label.interface';

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);

  const url = 'https://api.github.com/repos/angular/angular/labels';

  try {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(resp.statusText);
    }

    const labels: GitHubLabel[] = await resp.json();
    console.log('{labels}', { labels });

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
};
