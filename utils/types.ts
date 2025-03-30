export interface TimelineItemProps {
  companyImg: string;
  jobTitle: string;
  company: string;
  jobType?: string;
  duration: string;
  stuffIDid?: string[];
}

export interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  pdfId: string;
}

export type AnimatedTitleProps = {
  children: string;
  className: string;
  wordSpace: string;
  charSpace: string;
  delay?: number;
};