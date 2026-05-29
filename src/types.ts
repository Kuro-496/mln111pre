export interface Dialog {
  speaker: string;
  text: string;
  bg?: string;
}

export interface Choice {
  label: string;
  text: string;
  next: string;
}

export interface Node {
  terminal?: boolean;
  type?: 'good' | 'bad' | 'warn';
  badge?: string;
  text: string;
  lesson?: string;
  speaker?: string;
  bg?: string;
  choices?: Choice[];
}

export interface Scenario {
  id: string;
  icon: string;
  title: string;
  period: string;
  desc: string;
  year: string;
  bg?: string;
  intro: Dialog[];
  story: Node;
  nodes: Record<string, Node>;
}