import { Component } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <!-- contact.component.html -->
    <section class="py-16 bg-gradient-to-br from-blue-50 to-purple-50 mb-10">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div class="p-8 md:p-12 flex flex-col md:flex-row gap-8 items-center">
            <!-- Testo descrittivo -->
            <div class="flex-1">
              <h2 class="text-3xl font-bold text-gray-800 mb-4">
                Prenota una consulenza
              </h2>
              <p class="text-lg text-gray-600 mb-6">
                Sono disponibile per sessioni individuali, di coppia o familiari
                via WhatsApp. Scrivimi per fissare un appuntamento o per
                qualsiasi informazione.
              </p>

              <div class="space-y-4">
                <div class="flex items-start">
                  <svg
                    class="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-1 15h2v2h-2v-2zm1.976-12.524A1 1 0 0012 5a1 1 0 00-.976.783l-1.51 6.068a1 1 0 00.558 1.169 1 1 0 001.169-.558L12 7.236l1.759 5.226a1 1 0 001.169.558 1 1 0 00.558-1.169l-1.51-6.068z"
                    />
                  </svg>
                  <div>
                    <h3 class="font-semibold text-gray-800">
                      Attenzione personalizzata
                    </h3>
                    <p class="text-gray-600">
                      Ogni cliente riceve un trattamento su misura per le
                      proprie esigenze
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <svg
                    class="w-6 h-6 text-green-500 mt-1 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"
                    />
                    <path
                      d="M13 7h-2v5.414l3.293 3.293 1.414-1.414L13 11.586z"
                    />
                  </svg>
                  <div>
                    <h3 class="font-semibold text-gray-800">
                      Orari flessibili
                    </h3>
                    <p class="text-gray-600">
                      Disponibile dal Lunedì al Venerdì, dalle 9:00 alle 18:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Pulsante WhatsApp -->
            <div class="w-full md:w-auto text-center">
              <a
                href="https://wa.me/3286214867"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl shadow-md transition-all duration-300 transform hover:scale-105"
              >
                <svg
                  class="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                  />
                </svg>
                Contattami su WhatsApp
              </a>
              <p class="mt-4 text-gray-500 text-sm">
                Risposta garantita entro 24 ore
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ContactComponent {}
