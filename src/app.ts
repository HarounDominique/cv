import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss'] // corregido: styleUrls en plural
})
export class App {
  active: Section | null = null;
  activeExperience: string | null = null;

  // Control del zoom de la imagen de perfil
  zoomed = false;

  // Lógica de toggle al hacer click en la imagen
  toggleZoom(event: Event) {
    event.stopPropagation();
    if (window.innerWidth > 900) {
      this.zoomed = !this.zoomed;
    }
  }

  // Método que abre o cierra la card
  open(card: Section) {
    if (this.active === card) {
      // Cerramos la card
      this.active = null;

      // Si cerramos la card de perfil, reseteamos el zoom
      if (card === 'perfil') {
        this.zoomed = false;
      }
    } else {
      // Abrimos la nueva card
      this.active = card;

      // Reseteamos el zoom si abrimos otra card que no sea perfil
      if (card !== 'perfil') {
        this.zoomed = false;
      }
    }
  }

  toggleExperience(id: string) {
    this.activeExperience = this.activeExperience === id ? null : id;
  }

  close() {
    this.active = null;
    // Si cerramos cualquier card, reseteamos el zoom de perfil
    this.zoomed = false;
  }

  get activeTitle(): string {
    if (!this.active) return '';

    const titles: Record<Section, string> = {
      experiencia: 'Experiencia',
      sobreMi: 'Sobre mí',
      perfil: 'Perfil',
      proyectos: 'Proyectos',
      contacto: 'Contáctame'
    };

    return titles[this.active];
  }
}

type Section =
  | 'experiencia'
  | 'sobreMi'
  | 'perfil'
  | 'proyectos'
  | 'contacto';
