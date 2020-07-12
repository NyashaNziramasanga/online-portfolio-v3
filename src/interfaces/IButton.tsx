export default interface IButton {
  name: string;
  action: string;
  type?: string;
  icon?: string;
  download?: string;
  color: 'blue' | 'gray';
}
