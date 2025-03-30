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
  pdfUrl: string;
}