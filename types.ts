import React from 'react';

export interface ToolDef {
  id: string;
  name: string;
  description: string;
  category: ToolCategory;
  icon: string;
  path: string;
  component: React.FC;
  keywords: string[];
  content: ToolContent;
}

export interface ToolContent {
  intro: string;
  howTo: string[];
  benefits: string[];
  faqs: { question: string; answer: string }[];
}

export enum ToolCategory {
  AI = 'AI & Smart Tools',
  TEXT = 'Text Utilities',
  DEV = 'Developer Tools',
  CALC = 'Calculators',
  IMG = 'Image & Color',
  WEB = 'Web Management'
}

export interface AdProps {
  slotId: string;
  format?: 'auto' | 'fluid' | 'rectangle';
  className?: string;
  label?: string;
}