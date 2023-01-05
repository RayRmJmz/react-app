export interface pelicula {
  id: number;
  titulo: string;
  poster: string;
}

export interface peliculaCreacionDTO {
  titulo: string;
  enCines: boolean;
  trailer: string;
  fechaLanzamiento?: Date;
  poster?: File;
  posterURL?: string;
}

export interface landingPageDto {
  enCartelera?: pelicula[];
  proximosEstrenos?: pelicula[];
}
