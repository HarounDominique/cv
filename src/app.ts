import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  active: Section | null = null;

  activeExperience: string | null = null;

  toggleExperience(id: string) {
    this.activeExperience = this.activeExperience === id ? null : id;
  }

  open(section: Section) {
    this.active = this.active === section ? null : section;
  }

  close() {
    this.active = null;
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
