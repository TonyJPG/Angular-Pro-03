import { sleep } from '@helpers/sleep';
import { environment } from 'src/environments/environment.development';
import { GitHubLabel } from '../interfaces';

const { BASE_URL, GITHUB_TOKEN } = environment;

export const getLabels = async (): Promise<GitHubLabel[]> => {
  await sleep(1500);

  try {
    const resp = await fetch(`${BASE_URL}/labels`, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
      },
    });

    if (!resp.ok) throw new Error("Can't load labels");

    const labels: GitHubLabel[] = await resp.json();
    console.log({ labels });

    return labels;
  } catch (error) {
    throw "Can't load labels";
  }
};
