export interface HeaderProps {
  displayLink?: boolean;
}

export interface Item {
  id: number;
  title: string;
  image_url: string;
}

export interface IBGEUFResponse {
  sigla: string;
}

export interface IBGECityResponse {
  nome: string;
}

export interface DropzoneProps {
  onFileUploaded: (file: File) => void;
}
