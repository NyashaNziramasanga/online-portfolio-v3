export default interface IPortfolio {
  name?: string;
  desc?: string;
  tech?: string;
  githubURL?: string;
  webURL?: string;
  gif: string;
  image: string;
  platform?: 'web' | 'mobile' | 'chrome' | 'desktop' | 'wordpress' | 'other';
  openTab?: string;
}
