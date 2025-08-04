import { Component } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, ContactComponent, RouterLink, RouterModule],
  template: `
    <!-- Hero Section -->
    <div
      class="relative w-full h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat home-background overflow-hidden"
    >
      <!-- Overlay per migliorare la leggibilità -->
      <div class="absolute inset-0 bg-black/40 md:bg-black/30"></div>

      <!-- Contenuto testuale centrato -->
      <div class="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <!-- Titolo principale con dimensioni responsive -->
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
        >
          Ogni emozione merita ascolto e comprensione.
        </h1>

        <!-- Sottotitolo con dimensioni responsive -->
        <p
          class="text-base sm:text-lg md:text-xl lg:text-xl xl:text-2xl text-gray-100 mb-6 sm:mb-8 px-2 sm:px-0"
        >
          Con delicatezza e ascolto, ti aiuterò a riconoscere le tue emozioni e
          a farne risorsa, per costruire una consapevolezza nuova e una vita che
          ti somigli davvero.
        </p>

        <!-- Pulsante con dimensioni responsive -->
        <app-button
          [btnlabel]="'Contatti'"
          [routerLink]="'/contatti'"
          class="inline-block rounded-full bg-white text-blue-600 hover:bg-blue-50 px-6 py-2 sm:px-8 sm:py-3 text-base sm:text-lg font-semibold shadow-md transition-colors duration-300"
        ></app-button>
      </div>
    </div>
    <!-- Sezione Chi Sono - Versione a larghezza intera -->
    <div class="relative py-20 px-6 md:px-10 overflow-hidden bg-blue-100/30">
      <!-- Elementi decorativi di sfondo -->
      <div
        class="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-blue-100/50"
      ></div>
      <div
        class="absolute -left-10 bottom-1/3 w-48 h-48 rounded-full bg-pink-100/50"
      ></div>

      <!-- Contenitore per il contenuto centrato -->
      <div class="text-center mb-16 relative">
        <!-- Striscia colorata sopra il titolo -->
        <div
          class="absolute -top-2 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-blue-200/50 rounded-full"
        ></div>

        <h2 class="text-4xl md:text-5xl font-bold text-gray-800 relative z-10">
          Conosciamoci meglio
        </h2>
      </div>
      <!-- Card principale -->
      <div
        class="flex flex-col lg:flex-row bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100/50"
      >
        <!-- Colonna sinistra con foto e dettagli -->
        <div
          class="lg:w-2/5 bg-gradient-to-b from-blue-50 to-white p-8 md:p-10 flex flex-col items-center"
        >
          <div class="relative mb-8">
            <div
              class="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="../../../assets/giuliafoto.jpeg"
                alt="Dott.ssa Giulia Spanu"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              class="absolute -bottom-5 -right-5 bg-white px-4 py-2 rounded-lg shadow-md border border-gray-100"
            >
              <span class="text-xs font-semibold text-blue-600">PSICOLOGA</span>
            </div>
          </div>

          <div class="text-center space-y-1">
            <h3 class="text-2xl font-bold text-gray-800">Giulia Spanu</h3>
            <p class="text-blue-600">Roma, 1993</p>

            <div class="pt-4 mt-4 border-t border-gray-200">
              <div class="flex justify-center space-x-4"></div>
            </div>
          </div>
        </div>

        <!-- Colonna destra con contenuto -->
        <div class="lg:w-3/5 p-8 md:p-12">
          <div class="prose prose-lg max-w-none">
            <h3 class="text-2xl font-bold text-gray-800 mb-6">
              La mia formazione
            </h3>

            <!-- Timeline -->
            <div class="space-y-8 border-l-2 border-blue-100 pl-8 relative">
              <!-- Punto timeline 1 -->
              <div class="relative">
                <div
                  class="absolute -left-11 top-1 w-8 h-8 rounded-full bg-blue-100 border-4 border-white flex items-center justify-center"
                >
                  <div class="w-2 h-2 rounded-full bg-blue-600"></div>
                </div>
                <h4 class="font-bold text-gray-800">Psicologia Clinica</h4>
                <p class="text-sm text-gray-500 mb-2">Laurea Magistrale</p>
                <p class="text-gray-600">
                  Formazione accademica con focus sulla psicopatologia e gli
                  approcci terapeutici integrati.
                </p>
              </div>
              <!-- Punto timeline 2 -->
              <div class="relative">
                <div
                  class="absolute -left-11 top-1 w-8 h-8 rounded-full bg-pink-100 border-4 border-white flex items-center justify-center"
                ></div>
              </div>
              <!-- Punto timeline 3 -->
              <div class="relative">
                <div
                  class="absolute -left-11 top-1 w-8 h-8 rounded-full bg-purple-100 border-4 border-white flex items-center justify-center"
                >
                  <div class="w-2 h-2 rounded-full bg-purple-600"></div>
                </div>
                <h4 class="font-bold text-gray-800">
                  Arteterapia e Kundalini Yoga
                </h4>
                <p class="text-sm text-gray-500 mb-2">
                  Certificazioni professionali
                </p>
                <p class="text-gray-600">
                  Integrazione di tecniche espressive e corporee per un
                  approccio olistico al benessere psicofisico.
                </p>
              </div>
            </div>

            <!-- Citazione -->
            <div
              class="mt-12 p-6 bg-gray-50 rounded-xl border-l-4 border-blue-400"
            >
              <p class="italic text-gray-700 mb-3">
                "Credo in una psicologia che sappia coniugare rigore scientifico
                e sensibilità umana, dove ogni individuo possa trovare lo spazio
                per esplorare la propria unicità."
              </p>
              <div class="flex items-center">
                <div
                  class="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center mr-3"
                >
                  <svg
                    class="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <span class="text-sm font-medium text-gray-600"
                  >Dott.ssa Giulia Spanu</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Pulsante -->
      <div class="text-center mt-16">
        <app-button
          [btnlabel]="'Scopri il mio approccio'"
          [routerLink]="'/chi-sono'"
          class="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full shadow-sm text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:-translate-y-1"
        ></app-button>
      </div>
    </div>

    <!-- Sezione Card con gradient continuo e immagini sotto -->
    <div
      class="bg-gradient-to-r from-blue-300 via-purple-200 to-pink-100 py-16 -mx-6 md:-mx-24"
    >
      <div class="px-6 md:px-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card Ansia -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-blue-600 mb-3">Ansia</h2>
              <p class="text-gray-700 mb-4">
                L'ansia è una risposta emotiva naturale, ma se non gestita può
                interferire con la vita quotidiana. Scopri come affrontarla con
                strategie efficaci.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-40 bg-white flex items-center justify-center p-4">
              <img
                src="../../../assets/ansia.png"
                alt="Ansia"
                class="w-[260px] h-[200px] object-contain"
              />
            </div>
          </div>

          <!-- Card Depressione -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-purple-600 mb-3">
                Depressione
              </h2>
              <p class="text-gray-700 mb-4">
                La depressione può portare a sentimenti di tristezza
                persistente. Scopri le risorse e i trattamenti disponibili per
                migliorare il tuo benessere.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-purple-500 hover:text-purple-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-40 bg-white flex items-center justify-center p-4">
              <img
                src="../../../assets/depressione.png"
                alt="Depressione"
                class="w-[400px] h-[200px] object-contain"
              />
            </div>
          </div>

          <!-- Card Stress -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-pink-600 mb-3">Stress</h2>
              <p class="text-gray-700 mb-4">
                Lo stress è una risposta psicofisica a compiti percepiti come
                eccessivi. Impara a gestirlo con tecniche mirate e
                personalizzate.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-40 bg-white flex items-center justify-center p-4">
              <img
                src="../../../assets/stress.png"
                alt="Stress"
                class="w-[260px] h-[200px] object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Colonna albero -->
    <div
      class="flex flex-col md:flex-row items-center justify-between gap-8 mt-10"
    >
      <!-- Immagine a sinistra -->
      <div
        class="w-full md:w-1/2 flex justify-center md:justify-start sm:mt-5 "
      >
        <div class="home-background-albero w-full h-72 md:h-96"></div>
      </div>

      <!-- Descrizione a destra -->
      <div class="w-full md:w-1/2 text-center md:text-left p-5">
        <h1 class=" lg:text-4xl font-bold mb-4 sm: text-2xl">
          Concentrati su ciò che conta di più
        </h1>
        <p class="text-gray-600 leading-relaxed lg:text-xl sm:text-sm">
          Prenditi il tempo per ascoltare ciò che davvero conta dentro di te.
          Spesso, tra i ritmi frenetici della vita quotidiana, perdiamo di vista
          il nostro benessere interiore e ciò che è essenziale per la nostra
          serenità. Sono qui per aiutarti a riscoprire il tuo equilibrio, a fare
          chiarezza sui tuoi bisogni più profondi e a trovare nuovi modi per
          affrontare le sfide della vita con maggiore consapevolezza e
          sicurezza.
        </p>
        <app-button
          [btnlabel]="'Servizi'"
          [routerLink]="'/servizi'"
          class="btn lg:btn-lg rounded-full bg-blue-300 border-0 hover:bg-blue-200 m-5 p-5 sm btn-lg"
        ></app-button>
      </div>
    </div>
    <div
      class="bg-gradient-to-br from-purple-400/20 via-green-400/20 to-blue-400/20 py-16 -mx-6 md:-mx-24"
    >
      <div class="px-6 md:px-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Card 1 - Sedute Singole -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-purple-600 mb-3">
                Sedute Singole
              </h2>
              <p class="text-gray-700 mb-4">
                Percorso individuale per affrontare ansia, stress o altre
                difficoltà personali, con l'obiettivo di ritrovare equilibrio e
                benessere interiore.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-purple-500 hover:text-purple-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-48 relative overflow-hidden rounded-b-xl">
              <!-- Sfondo con gradiente -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0"
              ></div>

              <!-- Immagine che copre tutto lo spazio -->
              <img
                src="../../../assets/sedutesingole.png"
                alt="Sedute Singole"
                class="absolute inset-0 w-full h-full object-cover object-center "
              />

              <!-- Sovrapposizione per migliorare la leggibilità -->
              <div class="absolute inset-0 bg-white/10 z-10"></div>
            </div>
          </div>

          <!-- Card 2 - Sedute Familiari -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-green-600 mb-3">
                Sedute Familiari
              </h2>
              <p class="text-gray-700 mb-4">
                Supporto per famiglie che affrontano cambiamenti o sfide
                relazionali, per migliorare la comunicazione e creare un
                ambiente familiare più armonioso.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-green-500 hover:text-green-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-48 relative overflow-hidden rounded-b-xl">
              <!-- Sfondo con gradiente -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0"
              ></div>

              <!-- Immagine che copre tutto lo spazio -->
              <img
                src="../../../assets/sedutefamiliari.png"
                alt="Sedute Familiari"
                class="absolute inset-0 w-full h-full object-cover object-center "
              />

              <!-- Sovrapposizione per migliorare la leggibilità -->
              <div class="absolute inset-0 bg-white/10 z-10"></div>
            </div>
          </div>

          <!-- Card 3 - Sedute di Coppia -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-blue-600 mb-3">
                Sedute di Coppia
              </h2>
              <p class="text-gray-700 mb-4">
                Rafforza la tua relazione esplorando dinamiche di coppia,
                comunicazione e gestione dei conflitti per creare una
                connessione più profonda e duratura.
              </p>
              <a
                href="#"
                class="inline-flex items-center text-blue-500 hover:text-blue-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-48 relative overflow-hidden rounded-b-xl">
              <!-- Sfondo con gradiente -->
              <div
                class="absolute inset-0 bg-gradient-to-br from-purple-50 to-white z-0"
              ></div>

              <!-- Immagine che copre tutto lo spazio -->
              <img
                src="../../../assets/sedutedicoppia.png"
                alt="Sedute Singole"
                class="absolute inset-0 w-full h-full object-cover object-center "
              />

              <!-- Sovrapposizione per migliorare la leggibilità -->
              <div class="absolute inset-0 bg-white/10 z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- YOGA  -->

    <div
      class="flex flex-col md:flex-row items-center justify-between gap-8 mt-20"
    >
      <!-- Immagine a sinistra -->
      <div
        class="w-full md:w-1/2 flex justify-center md:justify-center sm:mt-5 "
      >
        <div class="home-background-yoga lg:mb-20 md:h-96 sm:mb-0"></div>
      </div>

      <!-- Descrizione a destra -->
      <div class="w-full md:w-1/2 text-center md:text-left p-5 ">
        <h1 class="lg:text-4xl font-bold mb-4 sm: text-2xl">
          Come ho scoperto lo Yoga?
        </h1>
        <p class="text-gray-600 leading-relaxed lg:text-xl sm:text-sm">
          All'età di 14 anni, ho iniziato a esplorare le filosofie orientali,
          intraprendendo un percorso di introspezione e meditazione attraverso
          la pratica dello yoga. Questa esperienza mi ha guidato verso una
          profonda comprensione di me stessa e, dopo essere diventata insegnante
          di yoga a 18 anni, ho sentito il desiderio di approfondire
          ulteriormente la conoscenza del benessere psicologico. Questo
          interesse mi ha portata a intraprendere gli studi in Psicologia, dove
          ho compreso di aver trovato la mia vera vocazione. Dopo anni di studi
          accademici, tirocinio e l’ottenimento dell’abilitazione alla
          professione di Psicologa, ho iniziato ad accogliere i miei primi
          pazienti. Nel tempo, questo percorso mi ha consentito di crescere
          professionalmente e di realizzare il mio obiettivo: offrire un ascolto
          attento e autentico, sostenendo il benessere emotivo dell'Altro.
        </p>
        <app-button
          [btnlabel]="'Scopri di più'"
          [routerLink]="'/servizi'"
          class="btn btn-lg rounded-full bg-blue-300 border-0 hover:bg-blue-200 m-5 p-5"
        ></app-button>
      </div>
    </div>
    <!-- Sezione Card con gradient continuo -->
    <div
      class="bg-gradient-to-r from-yellow-100 to-pink-100 py-16 -mx-6 md:-mx-24"
    >
      <div class="px-6 md:px-10">
        <!-- Modificato per centrare le due card -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 justify-center max-w-4xl mx-auto"
        >
          <!-- Card Yoga -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-yellow-600 mb-3">Yoga</h2>
              <p class="text-gray-700 mb-4">
                Esplora la pratica dello yoga come strumento per la connessione
                mente-corpo, favorendo equilibrio interiore, rilassamento e
                consapevolezza.
              </p>
              <a
                [routerLink]="'/servizi'"
                class="inline-flex items-center text-yellow-500 hover:text-yellow-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-48  flex items-end justify-center p-4">
              <img
                src="../../../assets/yogaterapia.png"
                alt="Yoga"
                class="max-h-[160px] w-auto object-contain object-bottom"
              />
            </div>
          </div>

          <!-- Card Arte Terapia -->
          <div
            class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div class="p-6 flex-1">
              <h2 class="text-2xl font-bold text-pink-600 mb-3">
                Arte Terapia
              </h2>
              <p class="text-gray-700 mb-4">
                Scopri come l'espressione creativa attraverso l'arte può
                aiutarti a esplorare emozioni, promuovere autoconoscenza e
                migliorare il benessere psicologico.
              </p>
              <a
                [routerLink]="'/servizi'"
                class="inline-flex items-center text-pink-500 hover:text-pink-700 font-medium"
              >
                Scopri di più
                <svg
                  class="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </div>
            <div class="h-48  flex items-end justify-center p-4">
              <img
                src="../../../assets/cavalletto.png"
                alt="Arte Terapia"
                class="max-h-[160px] w-auto object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Arteterapia -->
    <div
      class="flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-8 p-10 mt-20 sm:mb-0"
    >
      <!-- Colonna con testo Arte terapia -->
      <div class="w-full md:w-1/2 text-center md:text-left sm:text-center ">
        <h1 class="lg:text-4xl font-bold mb-4 sm: text-2xl">
          Arte: una nostra alleata
        </h1>
        <p class="text-gray-600 leading-relaxed lg:text-xl sm:text-sm">
          In qualità di arteterapeuta, integro nelle mie sedute, quando
          appropriato o su richiesta, tecniche di espressione creativa per
          facilitare un percorso di esplorazione interiore. Attraverso l’uso
          libero di colori e forme, invito il paziente a riscoprire uno “sguardo
          puro” simile a quello dei bambini, lontano da giudizi o simboli
          predefiniti. Questo approccio permette di entrare in contatto con la
          parte più autentica e genuina del Sé, favorendo una profonda
          auto-espressione e una maggiore consapevolezza emotiva.
        </p>
        <app-button
          [btnlabel]="'Scopi di più'"
          [routerLink]="'/servizi'"
          class="btn btn-lg rounded-full bg-blue-300 border-0 hover:bg-blue-200 m-5 p-5"
        ></app-button>
      </div>

      <!-- Colonna con immagine -->
      <div class="flex justify-center items-center sm:mt-5">
        <div class="w-full md:w-1/2">
          <div class="home-background-arte w-full h-72 md:h-96"></div>
        </div>
      </div>
    </div>
    <!-- Sezione Letture consigliate - Versione più accattivante -->
    <div class="flex justify-end mt-10 px-6">
      <div
        class="bg-gradient-to-r from-gray-50 via-white to-blue-50 border-l-8 border-blue-400 p-8 rounded-xl shadow-lg w-full md:w-2/3 lg:w-2/3 mx-auto hover:shadow-2xl transition-shadow duration-300"
      >
        <div class="flex items-center mb-4">
          <h3 class="text-2xl font-extrabold text-blue-400 ">
            Letture consigliate
          </h3>
        </div>
        <p class="text-blue-900 font-semibold mb-1 text-lg">
          Manuale di Kundarte®: La via del disegno<br />
          <span class="italic text-blue-900 text-base">di Klirò</span>
        </p>
        <a
          href="https://amzn.eu/d/erbapkb"
          target="_blank"
          class="inline-block mt-2 text-blue-500-600 font-semibold underline hover:text-pink-800 transition-colors duration-200"
        >
          Vai al libro su Amazon
        </a>
        <p class=" mt-5 leading-relaxed text-justify">
          Kundarte è un metodo che integra pratiche artistiche e yogiche per
          stimolare l'espressione creativa e il benessere interiore. Sviluppato
          da Klirò, artista e insegnante di yoga e discipline artistiche,
          esplora il legame profondo tra gesto, respiro e meditazione. Il suo
          manuale offre spunti preziosi per chi desidera approfondire la
          connessione tra corpo e immaginazione, trasformando il processo
          creativo in un'esperienza di armonia e presenza.
        </p>
      </div>
    </div>

    <!-- contatti -->
    <div class="text-center mt-10 sm:mt-20">
      <!-- Titolo -->
      <h1 class="lg:text-4xl font-bold mb-4 sm: text-2xl ">
        Vuoi saperne di più?
      </h1>

      <!-- Paragrafo -->
      <p class="text-gray-600 leading-relaxed text-xl sm:text-xl md:text-2xl">
        Contattami per un colloquio conoscitivo, senza impegno!
      </p>
    </div>

    <!-- Contenitore flessibile per la parte del contatto e l'immagine -->
    <div
      class="flex flex-col sm:flex-row justify-center sm:justify-around mt-10 sm:mt-16"
    >
      <!-- Componente di contatto -->
      <app-contact class="mb-6 sm:mb-0"></app-contact>

      <!-- Immagine della ragazza (visibile solo su schermi più larghi) -->
      <div class="home-background-girl sm:block hidden"></div>
    </div>
  `,
  styles: ` 
.home-background {
    background-image: url('src/assets/graficahero.png');
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
}
  .home-background-albero{
    background-image: url('src/assets/homepagesimgalbero.png');
    background-size: cover;
    background-position: top left;
    width:100%;
    height:600px;
  }
  .home-background-yoga{
    background-image: url('src/assets/yogaimg.png');
    background-size: cover;
    background-position: center;
    width: 500px;
    height:400px;
  }
  .home-background-arte{
    background-image: url('src/assets/arteterapia.png');
    background-size: cover;
    background-position: cover;
    width: 300px;
    height:400px;
  }
  .home-background-girl{
    background-image: url('src/assets/girl.PNG');
    background-size: cover;
    background-position: cover;
    width: 300px;
    height:400px;
    position: relative;
   bottom: -211px;
  }
  @media (max-width: 768px) {
  .home-background {
    width: 300px;
    height: 400px;
  }
  .home-background-yoga {
    width: 400px; /* Dimensioni ridotte per smartphone */
    height: 350px;
  margin-left: -15px;
  }
}


  
`,
})
export class HomeComponent {}
