<template>
  <div class="m-4 md:m-10 p-8 rounded-4xl bg-green-50- bg-gradient-to-b from-green-100 to-white ring-6 ring-purple-200">
    <div class="text-center font-mono text-7xl text-sky-600">Mike</div>
    <div class="md:flex justify-between gap-4">
      <div>
        <div class="text-left font-serif text-4xl text-red-600 underline">Persönliche Daten</div>
        <p class="text-stone-800 mt-4 text-2xl">
          Name: Mike <br />
          Vorname: Breda <br />
          Geburtsdatum: 30.09.2010 <br />
          E-Mail: bredamike33@gmail.com <br />
          Alter: 14 Jahre <br />
          Geschlecht: Männlich
        </p>
      </div>
      <nuxt-img src="img/mike.png" alt="Mike" width="250" height="250" class="rounded" />
    </div>
    <div class="mt-10 md:flex flex-row gap-4 justify-between">
      <div>
        <div class="text-left font-serif text-4xl text-teal-600 underline">Schulische Ausbildung</div>
        <p class="mt-4 text-left text-2xl text-stone-800">
          Schule: Lycée Josy Bartel Mamer <br />
          Schulform: Lycée <br />
          Jahrgangsstufe: 6G1S <br />
          Jahresdurchschnitt: 40 <br />
          Praktikum: Webdesign (1 Tag)
        </p>
      </div>
      <div>
        <div class="text-right font-serif text-4xl text-fuchsia-600 underline">Sprachen</div>
        <p class="mt-4 text-right text-2xl text-stone-800">
          Luxemburgisch, Französisch, Deutsch <br />
          Fließend in Wort und Schrift <br />
          Englisch: Grundkenntnisse
        </p>
      </div>
    </div>
    <div class="md:flex justify-between gap-4">
      <div>
        <p class="mt-10 text-center font-sans text-4xl text-violet-600 underline">Stärken</p>
        <p class="mt-4 text-center text-2xl text-stone-800">
          Schnelles Lernen <br />
          Gute Menschenkenntnis <br />
          Fundierte Kenntnisse in Laptops / PCs <br />
          Grundwissen in der Musikbranche
        </p>
      </div>
      <div>
        <p class="mt-10 text-center font-sans text-4xl text-violet-600 underline">Charaktereigenschaften</p>
        <p class="mt-4 text-center text-2xl text-stone-800">
          Guter Humor <br />
          Ordentlich <br />
          Organisiert <br />
          Freundlich
        </p>
      </div>
      <div>
        <p class="mt-10 text-center font-sans text-4xl text-violet-600 underline">Hobbys</p>
        <p class="mt-4 text-center text-2xl text-stone-800">
          Unternehmungen mit Freunden <br />
          Gaming <br />
          Sport
        </p>
      </div>
    </div>
    <div class="mt-20 text-left font-serif text-4xl text-lime-600 underline">Ein wenig über mich</div>
    <div class="mt-4 text-left font-sans text-3xl text-stone-800">
      Ich liebe es zu reisen. <br />
      Ich arbeite gerne mit Menschen zusammen. <br />
      Ich würde sagen, dass ich ein wenig bestimmt bin. <br />
      Ich organisiere gerne Wettbewerbe, zum Beispiel in Videospielen.
    </div>
  </div>
</template>
