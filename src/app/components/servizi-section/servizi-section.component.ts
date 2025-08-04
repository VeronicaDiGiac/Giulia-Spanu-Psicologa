import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { CardsServiziComponent } from '../cards-servizi/cards-servizi.component';

@Component({
  selector: 'app-servizi-section',
  standalone: true,
  imports: [NgFor, CardsServiziComponent],
  template: `
    <div
      class="relative w-full h-[70vh] min-h-[400px] flex items-center justify-center bg-contain bg-center bg-no-repeat home-background"
    >
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black bg-opacity-40"></div>

      <!-- Content -->
      <div
        class="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-4xl mx-auto"
      >
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          I miei servizi professionali
        </h1>
        <p class="text-base sm:text-lg md:text-xl text-gray-100">
          Percorsi personalizzati per il tuo benessere psicologico ed emotivo
        </p>
      </div>
    </div>

    <!-- Main Content Container -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <!-- Psicologia Section -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <div class="inline-block relative">
            <h2
              class="text-3xl md:text-4xl font-bold text-blue-600 relative z-10"
            >
              Servizi Psicologici
            </h2>
            <div
              class="absolute -bottom-2 left-0 right-0 h-2 bg-blue-100/50 rounded-full z-0"
            ></div>
          </div>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Approcci personalizzati per diverse esigenze psicologiche e di
            crescita personale
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-cards-servizi
            *ngFor="let servizio of servizi"
            [titolo]="servizio.titolo"
            [dettagli]="servizio.dettagli"
          ></app-cards-servizi>
        </div>
      </div>

      <!-- Yoga Section -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <div class="inline-block relative">
            <h2
              class="text-3xl md:text-4xl font-bold text-yellow-600 relative z-10"
            >
              Servizi Yoga
            </h2>
            <div
              class="absolute -bottom-2 left-0 right-0 h-2 bg-yellow-100/50 rounded-full z-0"
            ></div>
          </div>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Percorsi integrati per il benessere psicofisico attraverso la
            pratica yogica
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-cards-servizi
            *ngFor="let servizioY of serviziYoga"
            [titolo]="servizioY.titolo"
            [dettagli]="servizioY.dettagli"
            [sfondoGiallo]="true"
          ></app-cards-servizi>
        </div>
      </div>

      <!-- Arte Terapia Section -->
      <div class="mb-20">
        <div class="text-center mb-12">
          <div class="inline-block relative">
            <h2
              class="text-3xl md:text-4xl font-bold text-pink-600 relative z-10"
            >
              Arte Terapia
            </h2>
            <div
              class="absolute -bottom-2 left-0 right-0 h-2 bg-pink-100/50 rounded-full z-0"
            ></div>
          </div>
          <p class="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Espressione creativa come strumento di esplorazione e crescita
            interiore
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <app-cards-servizi
            *ngFor="let servizioArte of serviziArte"
            [titolo]="servizioArte.titolo"
            [dettagli]="servizioArte.dettagli"
            [sfondoRosa]="true"
          ></app-cards-servizi>
        </div>
      </div>
    </div>
  `,
  styles: `
  .home-background {
    background-image: url('src/assets/herosectionservizi.png');
    background-size: cover;
    background-position: center;
    width: 100vw;          
    height: 100vh;        
    margin: 0;            
    padding: 0;            
    position: relative;    
    overflow: hidden;    
    left: 50%;             
    transform: translateX(-50%); 
    margin-top: -60px;
}`,
})
export class ServiziSectionComponent {
  servizi: any = [
    {
      titolo: 'Psicologia Clinica',
      dettagli: [
        'Supporto per Disturbi della Personalità',
        'Gestione dei Disturbi d’Ansia',
        'Interventi per Disturbi dell’Umore',
        'Supporto per lo Spettro Autistico',
      ],
    },
    {
      titolo: 'Età Evolutiva e Scolastica',
      dettagli: [
        'Interventi per DSA',
        'Gestione delle difficoltà scolastiche',
        'Arteterapia per bambini e adolescenti',
      ],
    },
    {
      titolo: 'Arteterapia e Crescita Personale',
      dettagli: [
        'Arteterapia per benessere emotivo',
        'Percorsi di consapevolezza',
        'Gestione dello stress con tecniche artistiche',
      ],
    },
    {
      titolo: 'Mindfulness e Yoga',
      dettagli: [
        'Pratiche Mindfulness per ridurre stress',
        'Yoga come supporto alla gestione emotiva',
      ],
    },
    // {
    //   titolo: 'Psicoterapia (in formazione)',
    //   dettagli: [
    //     'Approccio umanistico-esistenziale',
    //     'Supporto per crisi esistenziali',
    //     'Gestione delle relazioni interpersonali',
    //   ],
    // },
    {
      titolo: 'Disturbi d’Ansia',
      dettagli: [
        'Disturbo d’ansia generalizzata (GAD)',
        'Disturbo di panico',
        'Fobie specifiche',
        'Ansia sociale (fobia sociale)',
      ],
    },
    {
      titolo: 'Disturbi dell’Umore',
      dettagli: [
        'Depressione maggiore',
        'Distimia (depressione cronica di lieve entità)',
        // 'Disturbo bipolare',
      ],
    },
    {
      titolo: 'Consulenze Psicologiche per Adulti',
      dettagli: [
        'Gestione delle difficoltà relazionali e familiari',
        'Supporto nelle fasi di cambiamento e nelle scelte di vita',
      ],
    },
    {
      titolo: 'Disturbi Ossessivo-Compulsivi e Correlati',
      dettagli: [
        'Disturbo ossessivo-compulsivo (DOC)',
        'Disturbo da accumulo (hoarding)',
        'Disturbo dismorfico corporeo',
      ],
    },
    // {
    //   titolo: 'Disturbi della Personalità',
    //   dettagli: [
    //     'Disturbo narcisistico di personalità',
    //     'Disturbo borderline di personalità',
    //     'Disturbo evitante di personalità',
    //     'Disturbo dipendente di personalità',
    //   ],
    // },
    {
      titolo: 'Disturbi dello Spettro Autistico',
      dettagli: [
        'Sindrome di Asperger (oggi ricompresa nello spettro autistico secondo il DSM-5)',
      ],
    },
    {
      titolo: 'Disturbi Relazionali',
      dettagli: [
        'Difficoltà nella gestione delle relazioni interpersonali',
        'Problemi di coppia e familiari',
      ],
    },
    {
      titolo: 'Disturbi legati allo Stress',
      dettagli: [
        'Disturbo da stress post-traumatico (PTSD)',
        'Disturbo acuto da stress',
        'Burnout',
      ],
    },
    {
      titolo: 'Disturbi Psicosomatici',
      dettagli: [
        'Gestione di sintomi fisici legati a stress e disagio psicologico',
      ],
    },
    {
      titolo: 'Difficoltà legate alla Sfera Scolastica e Lavorativa',
      dettagli: [
        'Disturbi specifici dell’apprendimento (DSA)',
        'Ansia da prestazione e difficoltà lavorative',
      ],
    },
  ];

  serviziYoga: any = [
    {
      titolo: 'Benessere Psicofisico',
      dettagli: [
        'Riduzione dello stress e dell’ansia: Attraverso tecniche di respirazione (pranayama) e meditazione, aiuta a calmare la mente e ridurre il livello di cortisolo.',
        // 'Miglioramento del sistema nervoso: Rafforza il sistema nervoso e aumenta la capacità di affrontare situazioni di stress.',
        // ' Equilibrio emozionale: Aiuta a elaborare emozioni difficili, favorendo la stabilità interiore.',
      ],
    },
    {
      titolo: 'Crescita Personale e Spirituale',
      dettagli: [
        'Aumento della consapevolezza: Incoraggia un profondo ascolto interiore, stimolando l introspezione e la connessione con il proprio sé autentico',
        // 'Risveglio dell’energia Kundalini: Mira a risvegliare l’energia latente alla base della colonna vertebrale, promuovendo un senso di espansione e connessione universale.',
        // '  Rimozione di blocchi energetici: Lavora sui chakra e sui canali energetici, favorendo un flusso armonioso di energia nel corpo.',
      ],
    },
    {
      titolo: 'Supporto alla Salute Fisica',
      dettagli: [
        'Potenziamento del sistema immunitario: Grazie a posture specifiche (asana) e respirazioni profonde, rafforza le difese naturali del corpo',
        // 'Miglioramento della flessibilità e della forza: Le posture dinamiche aumentano il tono muscolare e la mobilità articolare',
        // 'Regolazione del metabolismo: Aiuta a bilanciare il sistema endocrino, influendo positivamente su metabolismo e umore',
      ],
    },
    {
      titolo: 'Benefici Specifici per Gruppi',
      dettagli: [
        'Gestanti: Tecniche per supportare la gravidanza e il parto',
        'Bambini e adolescenti: Programmi per migliorare la concentrazione, la gestione delle emozioni ',
        // 'Anziani: Sessioni dolci per mantenere vitalità fisica e mentale, riducendo il rischio di malattie legate all’età',
        // 'Persone con traumi o dipendenze: Offre un supporto terapeutico attraverso pratiche mirate per il rilascio di traumi e la disintossicazione',
      ],
    },
    {
      titolo: 'Applicazioni Professionali',
      dettagli: [
        'Wellness aziendale: Percorsi per ridurre lo stress sul lavoro e migliorare la produttività e il benessere dei dipendenti',
        // 'Performance artistica e sportiva: Aiuta artisti e atleti a migliorare concentrazione, gestione del respiro e rilassamento',
      ],
    },
    {
      titolo: 'Crescita Creativa',
      dettagli: [
        'Stimolazione della creatività: Aiuta a sbloccare il potenziale creativo attraverso la meditazione e il risveglio del terzo chakra (Manipura) e del sesto chakra (Ajna)',
      ],
    },
  ];

  serviziArte: any = [
    {
      titolo: 'Espressione emotiva',
      dettagli: [
        'Permette di esprimere sentimenti e pensieri difficili da verbalizzare.',
        'Crea uno spazio sicuro per esplorare il proprio mondo interiore.',
      ],
    },
    {
      titolo: 'Riduzione dello stress',
      dettagli: [
        'Le attività artistiche, come il disegno o la pittura, favoriscono il rilassamento.',
        'Aiuta a diminuire i livelli di ansia e tensione.',
      ],
    },
    {
      titolo: 'Miglioramento dell’autostima',
      dettagli: [
        'La creazione di un’opera d’arte personale aumenta la fiducia nelle proprie capacità.',
        'Valorizza il senso di realizzazione personale.',
      ],
    },
    {
      titolo: 'Elaborazione di traumi',
      dettagli: [
        'Offre un mezzo non invasivo per affrontare esperienze dolorose.',
        'Favorisce il processo di guarigione e rielaborazione.',
      ],
    },
    {
      titolo: 'Sviluppo della creatività',
      dettagli: [
        'Stimola il pensiero creativo.',
        'Migliora la capacità di trovare nuove prospettive e soluzioni ai problemi.',
      ],
    },
    {
      titolo: 'Promozione delle relazioni sociali',
      dettagli: [
        'Facilita il dialogo e l’empatia nei contesti di gruppo.',
        'Promuove il senso di appartenenza.',
      ],
    },
  ];
}
