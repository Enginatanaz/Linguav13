// LinguAAI Pedagogical Content — Level A1: Module 1 (Lessons 1–10)
// Tanışma, Alfabe ve Temel İletişim
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module1_lessons_1_10: Record<number, TopicBlueprint> = {
  // -------------------------------------------------------------------------
  // LESSON 1: Tanışma İfadeleri ve Kendini Tanıtma
  // -------------------------------------------------------------------------
  1: {
    skillType: 'speaking',
    concreteCompetency: "Günlük ve resmi ortamlarda selamlaşma kalıplarını (Hello, Good morning), adını söylemeyi (My name is, I am), karşı tarafın adını sormayı (What's your name?) ve memnuniyet ifadesini (Nice to meet you, too) hatasız kullanabilmek.",
    whyItMatters: "Yabancı bir dilde kurulan ilk temas sosyal iletişimin kapısıdır. Doğru bir selamlaşma ve tanışma, karşınızdaki kişiye hem saygı hem de güven hissi verir.",
    linguisticLogic: "İngilizcede tanışma üç temel aşamadan oluşur: 1) Selamlama (Greeting), 2) Kimlik bildirimi (Self-identification) ve 3) Karşılıklı nezaket teyidi (Pleasure formula). Türkçe 'Benim adım...' kalıbı 'My name is...' ile, 'Ben Ali' ise 'I am Ali' ile karşılanır. 'Nice to meet you' ifadesine yanıt verirken sonuna 'too' (de/da) eklenir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Ortama Göre Selamlaşma Seçimi",
        content: "Günün saatine ve samimiyet derecesine göre uygun selamı seçin. Samimi ortamlarda 'Hello' veya 'Hi'; günün saatine göre resmi ortamlarda 'Good morning' (öğleye kadar), 'Good afternoon' (öğleden 17:00'ye kadar), 'Good evening' (akşam) kullanılır.",
        formula: "Samimi: Hello / Hi  |  Resmi: Good morning / afternoon / evening",
        keyPhrase: "Hello! / Good morning!",
        subPoints: [
          "'Good night' bir selamlama DEĞİL, vedalaşma veya yatarken söylenen 'İyi geceler' ifadesidir.",
          "'Hi' arkadaş ortamlarında çok yaygındır; resmi toplantılarda 'Good morning / afternoon' tercih edilir."
        ],
        rationale: "Zamana ve ortama uygun selamlama İngilizcede temel görgü kuralıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Kendini Tanıtma ve Adını Sorma",
        content: "Adınızı iki doğal yolla söyleyebilirsiniz: 'My name is [İsim]' ya da daha pratik olan 'I am [İsim] / I'm [İsim]'. Karşı tarafın adını sormak için 'What is your name?' sorulur. Günlük konuşmada 'What is' sözcükleri birleşerek 'What's' olur.",
        formula: "My name is [İsim]  |  I'm [İsim]  |  What's your name?",
        keyPhrase: "My name is David. What's your name?",
        subPoints: [
          "Konuşma dilinde 'What is' yerine 'What's' (/wʌts/) kısaltması neredeyse zorunludur.",
          "'My name is' biraz daha resmi ve vurgulu, 'I'm' ise son derece doğal ve pratiktir."
        ],
        rationale: "Konuşma akıcılığı için kaynaşmış sesleri (contractions) ilk günden benimsemek gerekir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Memnuniyet Bildirimi Zinciri",
        content: "Tanışmanın ardından 'Nice to meet you' (Tanıştığıma memnun oldum) veya resmi ortamlarda 'Pleased to meet you' denir. Size bu söylendiğinde cümlenin sonuna 'too' ekleyerek 'Nice to meet you, too!' yanıtı verilir.",
        formula: "A: Nice to meet you! -> B: Nice to meet you, too!",
        keyPhrase: "Nice to meet you, too!",
        subPoints: [
          "Tek başına 'Me too' demek samimi arkadaş arasında anlaşılsa da ilk tanışmada kaba veya özensiz algılanabilir.",
          "'Nice to meet you' sadece İLK tanışmada söylenir; daha önce tanıdığınız birini tekrar görünce 'Nice to see you' denir."
        ],
        rationale: "Sosyal reflekslerin eksiksiz uygulanması iletişimi pürüzsüzleştirir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "İsim Bildirimi Kuralı",
        formula: "My name is [İsim]  VEYA  I am [İsim]",
        explanation: "Türkçe 'Benim adım' karşılığı 'My name is'tir. 'I' zamiri 'ben' demektir, 'benim' demek için 'My' iyelik sıfatı şarttır.",
        exampleSnippet: "My name is Alex. (Benim adım Alex.) / I am Sarah. (Ben Sarah.)",
        tipNote: "Asla 'I name is...' demeyin."
      },
      {
        ruleTitle: "Meet vs See Farkı",
        formula: "İlk karşılaşma: Nice to MEET you  |  Sonraki karşılaşmalar: Nice to SEE you",
        explanation: "'Meet' fiili 'ilk defa tanışmak' veya 'buluşmak' demektir. Zaten tanıdığınız bir arkadaşınıza 'Nice to meet you' derseniz onu unuttuğunuz izlenimi verirsiniz.",
        cautionNote: "Tanıdığınız birine 'Nice to see you again!' (Seni yeniden görmek ne güzel) deyin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I name is Alex.",
        correctExample: "My name is Alex. / I am Alex.",
        rootCause: "Türkçe 'Benim' iyelik anlamı yerine özne zamiri olan 'I' kelimesini doğrudan kullanma alışkanlığı.",
        memoryTip: "Ben = I, Benim = My! 'My name is' kalıbını tek bir kelime gibi ezberleyin."
      },
      {
        wrongExample: "Nice to meet you. -> Me too.",
        correctExample: "Nice to meet you. -> Nice to meet you, too.",
        rootCause: "Kolaycılığa kaçarak Türkçedeki 'Ben de' refleksini İngilizceye 'Me too' olarak aktarmak.",
        memoryTip: "Karşılık verirken cümlenin sonuna 'too' ekleyin: 'Nice to meet you, too!'"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Havalimanı Bekleme Salonunda İlk Tanışma",
      description: "Londra uçağını beklerken yan koltuktaki yolcuyla başlatılan doğal ve kibar bir tanışma diyaloğu.",
      contextType: "travel",
      dialogue: [
        { speaker: "James", textEn: "Hello! My name is James.", textTr: "Merhaba! Benim adım James." },
        { speaker: "Elif", textEn: "Hi James! I am Elif. Nice to meet you.", textTr: "Selam James! Ben Elif. Tanıştığıma memnun oldum." },
        { speaker: "James", textEn: "Nice to meet you, too, Elif. Are you traveling to London?", textTr: "Ben de memnun oldum Elif. Londra'ya mı seyahat ediyorsunuz?" },
        { speaker: "Elif", textEn: "Yes, I am. It is my first visit.", textTr: "Evet. Bu benim ilk ziyaretim." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe: Memnun oldum",
      conceptB: "İngilizce: Nice to meet you",
      keyDifference: "Türkçede durum tek bir çekimli fiille (memnun oldum) ifade edilirken, İngilizcede sıfat + mastar yapısı (It is nice to meet you) kullanılır.",
      exampleA: "Tanıştığıma çok memnun oldum.",
      exampleB: "It is very nice to meet you."
    },
    memoryHook: "Tanışma Üçgeni: Selam ver (Hello) -> Adını söyle (My name is) -> Memnuniyet bildir (Nice to meet you, too)!",
    examples: [
      {
        en: "Good morning, my name is David Miller and I am the new project manager.",
        tr: "Günaydın, benim adım David Miller ve ben yeni proje yöneticisiyim.",
        highlightedWords: ["Good morning", "my name is", "I am"],
        grammarCategory: "Resmi Tanışma",
        contextNote: "İş yerinde resmi bir ilk toplantı başlangıcı.",
        breakdownNote: "Resmi selamlama + İsim bildirimi + Görev tanımı."
      },
      {
        en: "Hi! I'm Sarah. What is your name?",
        tr: "Selam! Ben Sarah. Senin adın ne?",
        highlightedWords: ["Hi", "I'm", "What is your name"],
        grammarCategory: "Samimi Tanışma",
        contextNote: "Sınıf veya kafe ortamında samimi tanışma.",
        breakdownNote: "Samimi selamlama + Ad bildirme + Ad sorma."
      },
      {
        en: "It is a great pleasure to meet you, Mr. Watson.",
        tr: "Sizinle tanışmak büyük bir şeref, Bay Watson.",
        highlightedWords: ["pleasure to meet you"],
        grammarCategory: "Üst Düzey Nezaket",
        contextNote: "Resmi ve saygılı iş ortamı.",
        breakdownNote: "It is + sıfat/isim + mastar fiil (to meet)."
      }
    ],
    vocabulary: [
      { word: "Introduce", phonetic: "/ˌɪn.trəˈdjuːs/", partOfSpeech: "verb", meaningTr: "Tanıtmak, tanıştırmak", exampleSentence: "Let me introduce myself: I am Robert." },
      { word: "Pleasure", phonetic: "/ˈpleʒ.ər/", partOfSpeech: "noun", meaningTr: "Zevk, memnuniyet", exampleSentence: "It is a pleasure to work with you." },
      { word: "Surname", phonetic: "/ˈsɜː.neɪm/", partOfSpeech: "noun", meaningTr: "Soyadı", exampleSentence: "What is your surname, please?" },
      { word: "Meet", phonetic: "/miːt/", partOfSpeech: "verb", meaningTr: "Tanışmak, karşılaşmak", exampleSentence: "Nice to meet you in person." }
    ],
    quickCheck: {
      question: "Biri size 'Nice to meet you!' dediğinde vereceğiniz en doğru ve kibar karşılık hangisidir?",
      options: [
        "Nice to meet you, too!",
        "Yes, I am fine.",
        "My name is John.",
        "Good morning, sir."
      ],
      correctIndex: 0,
      explanation: "'Nice to meet you' ifadesine cümlenin aynısı korunup sonuna 'too' (ben de) eklenerek 'Nice to meet you, too!' denir."
    },
    exercise: {
      prompt: "Aşağıdaki tanışma cümlesinde boş bırakılan yeri en uygun ifadeyle tamamlayın:",
      sentence: "Hello! My name is Thomas. ___ to meet you!",
      options: ["Nice", "Well", "Fine", "Goodly"],
      correctAnswer: "Nice",
      hint: "Tanışma anında memnuniyet bildiren evrensel sıfatı hatırlayın.",
      explanation: "Standart kalıp 'Nice to meet you' şeklindedir."
    },
    sentenceBuilder: {
      promptTr: "Merhaba, benim adım Lisa ve sizinle tanıştığıma memnun oldum.",
      targetEn: "Hello my name is Lisa and nice to meet you",
      availableWords: ["Hello", "my", "name", "is", "Lisa", "and", "nice", "to", "meet", "you", "I", "am", "too"],
      explanation: "Selamlama (Hello) + İsim (my name is Lisa) + Bağlaç (and) + Memnuniyet kalıbı (nice to meet you)."
    },
    summaryTakeaways: [
      "Ortama göre selamlama seçilir: samimi 'Hello/Hi', resmi 'Good morning/afternoon'.",
      "Kendinizi tanıtırken 'My name is...' veya 'I am...' denir; asla 'I name is...' denmez.",
      "'Nice to meet you' ifadesine daima 'Nice to meet you, too' şeklinde yanıt verilir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 2: İngilizce Alfabe ve Harf Kodlama (Spelling)
  // -------------------------------------------------------------------------
  2: {
    skillType: 'pronunciation',
    concreteCompetency: "İngilizce alfabedeki 26 harfi doğru fonetik telaffuzla sesletebilmek, Türk öğrenciler için kritik olan sesli harf tuzaklarını (A, E, I) aşmak ve isim/e-posta adreslerini harf harf kodlayabilmek (spelling).",
    whyItMatters: "Yurt dışı seyahatlerinde, otel rezervasyonlarında, resmi vize işlemlerinde veya telefon görüşmelerinde yabancı isimler anlaşılamadığında harf kodlaması (spelling) hayat kurtarır.",
    linguisticLogic: "İngilizcede bir harfin alfabedeki adı ile kelime içindeki telaffuzu birbirinden farklıdır. Harf kodlarken harfin alfabedeki resmi adı söylenir. En büyük tehlike Türkçedeki 'E' sesinin İngilizcede 'A' (/eɪ/) harfiyle; Türkçedeki 'İ' sesinin ise İngilizcede 'E' (/iː/) harfiyle karışmasıdır.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Kritik 5 Sesli Harfin (Vowels) Kodlanması",
        content: "İngilizce sesli harflerin okunuşunu bir müzik melodisi gibi zihninize kazıyın: A (/eɪ/), E (/iː/), I (/aɪ/), O (/oʊ/), U (/juː/). Türk öğrencilerin %90'ı 'E' harfini 'İ' sesiyle (/iː/), 'I' harfini ise 'Ay' sesiyle (/aɪ/) karıştırır.",
        formula: "A = /eɪ/  |  E = /iː/  |  I = /aɪ/  |  O = /oʊ/  |  U = /juː/",
        keyPhrase: "Email starts with E (/iː/), Ice cream starts with I (/aɪ/).",
        subPoints: [
          "'A' harfi 'Ey' okunur (Örnek: April -> /eɪ.prəl/).",
          "'E' harfi 'İi' okunur (Örnek: Email -> /ˈiː.meɪl/).",
          "'I' harfi 'Ay' okunur (Örnek: Island -> /ˈaɪ.lənd/).",
          "'U' harfi 'Yuu' okunur (Örnek: University -> /ˌjuː.nɪˈvɜː.sə.ti/)."
        ],
        rationale: "Sesli harf ayrımı yapılmadan doğru harf kodlama imkansızdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Kolayca Karışan Sessiz Harf Çiftleri",
        content: "Telaffuzları birbirine çok benzeyen sessiz harfleri net ayırt edin: G (/dʒiː/) ve J (/dʒeɪ/); C (/siː/) ve S (/es/); B (/biː/) ve P (/piː/); V (/viː/ - dudak-diş teması) ve W (/ˈdʌb.əl.juː/ - yuvarlak dudak).",
        formula: "G = /dʒiː/ (Cii)  vs  J = /dʒeɪ/ (Cey)  |  C = /siː/  vs  S = /es/",
        keyPhrase: "Gmail is G-mail, Jeans is J-e-a-n-s.",
        subPoints: [
          "'G' harfi 'Cii' diye okunurken, 'J' harfi 'Cey' diye okunur.",
          "'V' harfinde üst dişler alt dudağa değer; 'W' harfinde dudaklar öne uzatılıp yuvarlanır.",
          "'H' harfi alfabede 'Eytç' (/eɪtʃ/) diye adlandırılır."
        ],
        rationale: "Karışan harfler isim ve soyadı kodlarken veri tabanında yanlış kayıtlara yol açar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Kodlama İstemek ve Çift Harfleri (Double) Belirtmek",
        content: "Karşı tarafın ismini harf harf kodlamasını istemek için 'Could you spell that, please?' veya 'How do you spell your surname?' denir. Kodlama yaparken peş peşe gelen aynı harfler için 'double' (çift) sözcüğü kullanılır.",
        formula: "Could you spell that, please?  |  Double [Harf]",
        keyPhrase: "How do you spell your name? - B-O-double B-Y (Bobby).",
        subPoints: [
          "'Emma' ismini kodlarken: E - double M - A diyebilirsiniz.",
          "E-posta adreslerinde nokta için 'dot' (/dɒt/), @ işareti için 'at' (/æt/) denir."
        ],
        rationale: "Gerçek hayatta uluslararası standart kodlama protokolü budur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Sesli Harf Üçgeni Tuzağı (A - E - I)",
        formula: "A = 'Ey'  |  E = 'İi'  |  I = 'Ay'",
        explanation: "Türkçe 'Elma' derkenki 'E', İngilizcede 'A' harfinin adıdır! Türkçe 'İncir' derkenki 'İ', İngilizcede 'E' harfinin adıdır!",
        exampleSnippet: "Ali: A (/eɪ/) - L (/el/) - I (/aɪ/)",
        cautionNote: "Adınızda 'E' varsa sakın 'Ee' demeyin, İngilizce 'İi' (/iː/) sesi çıkarın!"
      },
      {
        ruleTitle: "E-Posta Kodlama Sözlüğü",
        formula: "[isim] + AT (@) + [alan adı] + DOT (.) + com",
        explanation: "E-posta adresi yazdırırken '@' işareti için 'at', '.' işareti için 'dot' denir. Asla 'point' veya 'comma' denmez.",
        exampleSnippet: "alex@gmail.com -> alex AT gmail DOT com",
        tipNote: "Alt çizgi için 'underscore' (_), tire için 'hyphen / dash' (-) denir."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "How do you spell your name? -> My name is A-L-İ (Türkçe harf adıyla).",
        correctExample: "A (/eɪ/) - L (/el/) - I (/aɪ/).",
        rootCause: "İngilizce harf sesletimi yerine refleks olarak Türkçe alfabe okunuşunu kullanmak.",
        memoryTip: "I harfi 'Ay' diye okunur; göz (eye) kelimesiyle aynı sestir!"
      },
      {
        wrongExample: "info@company.com -> info point company dot com.",
        correctExample: "info AT company DOT com.",
        rootCause: "@ işaretini Türkçe 'et' veya nokta yerine 'point' demek.",
        memoryTip: "@ = AT (nerede?), . = DOT (nokta)!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Otel Resepsiyonunda Rezervasyon Teyidi",
      description: "Londra'da bir otele giriş yaparken resepsiyon görevlisinin Türk müşterinin soyadını harf harf kaydetmesi.",
      contextType: "travel",
      dialogue: [
        { speaker: "Receptionist", textEn: "Welcome to Grand Hotel. May I have your surname, please?", textTr: "Grand Hotel'e hoş geldiniz. Soyadınızı alabilir miyim lütfen?" },
        { speaker: "Can", textEn: "My surname is Yilmaz.", textTr: "Soyadım Yılmaz." },
        { speaker: "Receptionist", textEn: "Could you please spell that for me, sir?", textTr: "Benim için harf harf kodlayabilir misiniz beyefendi?" },
        { speaker: "Can", textEn: "Sure: Y - I - L - M - A - Z.", textTr: "Elbette: Y (/waɪ/) - I (/aɪ/) - L (/el/) - M (/em/) - A (/eɪ/) - Z (/zed/)." },
        { speaker: "Receptionist", textEn: "Thank you Mr. Yilmaz, I found your reservation.", textTr: "Teşekkür ederim Bay Yılmaz, rezervasyonunuzu buldum." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Alfabe Mantığı",
      conceptB: "İngilizce Alfabe Mantığı",
      keyDifference: "Türkçede harfler neredeyse tamamen yazıldığı gibi tek bir sesle okunur. İngilizcede alfabedeki harf ismi ile kelimedeki telaffuz ayrışır ve 26 harf 44 farklı ses (fonem) üretir.",
      exampleA: "'E' harfi Türkçede daima /e/ sesidir.",
      exampleB: "'E' harfi İngilizcede alfabede /iː/, 'bed' içinde /e/, 'silent e' olarak ise sessizdir."
    },
    memoryHook: "Harf Şifresi: A = Ey!, E = İi!, I = Ay!, G = Cii!, J = Cey!",
    examples: [
      {
        en: "Could you spell your first name for the flight ticket, please?",
        tr: "Uçak bileti için ilk adınızı harf harf kodlayabilir misiniz lütfen?",
        highlightedWords: ["Could you spell", "first name"],
        grammarCategory: "Nezaketle Kodlama İsteme",
        contextNote: "Havalimanı check-in masasında.",
        breakdownNote: "Rica kalıbı (Could you) + fiil (spell) + nesne (first name)."
      },
      {
        en: "My surname is Smith: S - M - I - T - H.",
        tr: "Soyadım Smith: S (/es/) - M (/em/) - I (/aɪ/) - T (/tiː/) - H (/eɪtʃ/).",
        highlightedWords: ["surname", "S - M - I - T - H"],
        grammarCategory: "Harf Kodlama",
        contextNote: "Resmi kayıt oluşturma.",
        breakdownNote: "İyelik sıfatı (My) + İsim (surname) + to be (is) + harf harf kodlama."
      },
      {
        en: "Please send the file to john DOT brown AT company DOT com.",
        tr: "Lütfen dosyayı john DOT brown AT company DOT com adresine gönderin.",
        highlightedWords: ["DOT", "AT"],
        grammarCategory: "E-Posta Kodlama",
        contextNote: "İş e-postası adresi yazdırma.",
        breakdownNote: "Nokta (DOT) + Kuyruklu a (AT)."
      }
    ],
    vocabulary: [
      { word: "Spell", phonetic: "/spel/", partOfSpeech: "verb", meaningTr: "Harf harf kodlamak/yazmak", exampleSentence: "How do you spell your middle name?" },
      { word: "Letter", phonetic: "/ˈlet.ər/", partOfSpeech: "noun", meaningTr: "Harf, mektup", exampleSentence: "There are 26 letters in the English alphabet." },
      { word: "Vowel", phonetic: "/ˈvaʊ.əl/", partOfSpeech: "noun", meaningTr: "Sesli harf (ünlü)", exampleSentence: "A, E, I, O, U are vowels." },
      { word: "Consonant", phonetic: "/ˈkɒn.sə.nənt/", partOfSpeech: "noun", meaningTr: "Sessiz harf (ünsüz)", exampleSentence: "B, C, D are consonants." }
    ],
    quickCheck: {
      question: "İngilizce alfabede 'E' ve 'I' harflerinin resmi adları sırasıyla hangi seçenekte doğru verilmiştir?",
      options: [
        "E -> /iː/ (İi)  ve  I -> /aɪ/ (Ay)",
        "E -> /e/ (Ee)  ve  I -> /iː/ (İi)",
        "E -> /eɪ/ (Ey) ve  I -> /aɪ/ (Ay)",
        "E -> /aɪ/ (Ay) ve  I -> /iː/ (İi)"
      ],
      correctIndex: 0,
      explanation: "İngilizcede 'E' harfi 'İi' (/iː/), 'I' harfi ise 'Ay' (/aɪ/) olarak sesletilir."
    },
    exercise: {
      prompt: "Bir görevli sizden adınızı harf harf söylemenizi isterken aşağıdaki sorulardan hangisini sorar?",
      sentence: "Excuse me, ___ your name, please?",
      options: ["how do you spell", "what do you write", "can you read", "how is your call"],
      correctAnswer: "how do you spell",
      hint: "Harf harf kodlamak anlamına gelen İngilizce fiili arayın.",
      explanation: "'How do you spell your name?' adınızı nasıl kodlarsınız/yazarsınız anlamına gelir."
    },
    sentenceBuilder: {
      promptTr: "Lütfen soyadınızı benim için harf harf kodlayabilir misiniz?",
      targetEn: "Could you please spell your surname for me",
      availableWords: ["Could", "you", "please", "spell", "your", "surname", "for", "me", "how", "write", "name"],
      explanation: "Rica (Could you please) + fiil (spell) + nesne (your surname) + edat öbeği (for me)."
    },
    summaryTakeaways: [
      "İngilizce alfabede A (/eɪ/), E (/iː/), I (/aɪ/) harfleri Türk öğrenciler için en kritik tuzak seslerdir.",
      "İki ardışık aynı harfi belirtirken 'double' denir (Örn: Emma -> E - double M - A).",
      "E-postalarda '@' işareti 'at', '.' işareti ise 'dot' olarak okunur."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 3: Sayılar (1-100), Yaş ve Telefon Numarası
  // -------------------------------------------------------------------------
  3: {
    skillType: 'vocabulary',
    concreteCompetency: "1'den 100'e kadar olan sayıları telaffuz edebilmek; '-teen' (13-19) ve '-ty' (20, 30, 40...) vurgu farkını hatasız uygulamak; yaş söylerken 'To Be' fiilini kullanmak ve telefon numaralarını rakam rakam okuyabilmek.",
    whyItMatters: "Fiyat sorma, hesap ödeme, yaş belirtme, otel oda numarası veya telefon paylaşma gibi günlük hayatın en somut işlemlerinin tümü sayılar üzerine kuruludur.",
    linguisticLogic: "İngilizcede 1-12 arası sayılar özel köklere sahiptir. 13-19 arası '-teen' ekiyle (son hece vurgulu), 20-90 arası onlar basamakları ise '-ty' ekiyle (ilk hece vurgulu) biter. Yaş söylerken Türkçedeki 'sahip olma' mantığı (25 yaşındayım) İngilizceye 'I have 25' olarak aktarılamaz; kişi o yaşın kendisi olduğu için 'I am 25 years old' denir. Telefon numaraları ise tek tek rakam rakam okunur.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 1-20 Arası ve '-teen' Vurgusu",
        content: "1-12 arası temel sayılardır: 1 (one), 2 (two), 3 (three - dil dişler arasında peltek), 4 (four), 5 (five), 6 (six), 7 (seven), 8 (eight), 9 (nine), 10 (ten), 11 (eleven), 12 (twelve). 13-19 arası ise gençlik (teenager) çağı sayılarıdır: thirteen, fourteen, fifteen... Vurgu kelimenin SONUNDAKİ '-teen' hecesindedir.",
        formula: "13-19: [Kök] + TEEN (Vurgu sonda: thir-TEEN, four-TEEN)",
        keyPhrase: "I am seventeen (17) years old.",
        subPoints: [
          "13 (thirteen) ve 15 (fifteen) kelimelerinde kök değişir ('threeteen' veya 'fiveteen' DEĞİLDİR).",
          "11 (eleven) ve 12 (twelve) kuralsızdır; '-teen' almaz."
        ],
        rationale: "İlk 20 sayı tüm matematiksel ve pratik iletişimin omurgasıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Onluklar (20-90) ve Hayati Vurgu Farkı (-teen vs -ty)",
        content: "20 (twenty), 30 (thirty), 40 (forty - dikkat 'fourty' değil), 50 (fifty), 60 (sixty), 70 (seventy), 80 (eighty), 90 (ninety), 100 (one hundred). Onluklarda vurgu İLK hecededir. Havalimanında veya pazarlıkta 15 (fif-TEEN) ile 50 (FIF-ty) arasındaki farkı sadece vurgu belirler!",
        formula: "Onluklar: [Kök] + TY (Vurgu başta: THIR-ty, FOR-ty, FIF-ty)",
        keyPhrase: "Fourteen (14) vs Forty (40)  |  Fifteen (15) vs Fifty (50)",
        subPoints: [
          "21'den 99'a kadar birleşik sayılar arasına tire (-) konur: twenty-one, forty-five.",
          "40 yazılırken 'u' harfi düşer: FORTY (asla fourty yazmayın)."
        ],
        rationale: "Vurgu hatası 15 dolar yerine 50 dolar ödemenize veya yanlış uçağa binmenize sebep olabilir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Yaş Söyleme ve Telefon Numarası Kodlama",
        content: "Yaş söylerken kesinlikle 'have' kullanılmaz; 'am/is/are' kullanılır: 'I am 28 years old' ya da sadece 'I am 28'. Telefon numaraları ise Türkçe gibi ikili-üçlü gruplar halinde değil, tek tek rakam rakam okunur. Sıfır için 'oh' (/oʊ/) veya 'zero' denir.",
        formula: "Özne + am/is/are + [Sayı] + (years old)  |  Tel: Rakam rakam okunuş",
        keyPhrase: "She is twenty-five years old.  |  My number is 0-5-3-2... (oh-five-three-two...)",
        subPoints: [
          "Yaşta sadece sayı söylenebilir: 'I am 30' (Tamamen doğru ve doğaldır).",
          "Ancak 'years' kelimesi kullanılacaksa arkasından 'old' zorunludur: 'I am 30 years' YANLIŞTIR; 'I am 30 years old' DOĞRUDUR."
        ],
        rationale: "Kişisel bilgi formlarında yaş ve telefon paylaşımının küresel standardı budur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Hayati Yaş Kuralı: To Be vs Have",
        formula: "Özne + AM / IS / ARE + [Yaş] (+ years old)",
        explanation: "Türkçede '25 yaşına sahibim' (25 yaşındayım) denir. İngilizcede ise yaş bir mülkiyet değil, kişinin varoluşsal durumudur. Bu yüzden 'have' KULLANILMAZ, 'am/is/are' KULLANILIR.",
        exampleSnippet: "I am 24 years old. (DOĞRU)  |  *I have 24 years old. (KESİNLİKLE YANLIŞ)",
        cautionNote: "Asla 'I have ... years' demeyin!"
      },
      {
        ruleTitle: "Telefon Numarası Protokolü",
        formula: "Rakamlar tek tek okunur: 0 = 'oh' veya 'zero'  |  77 = 'double seven'",
        explanation: "İngilizcede 0542 sayısı 'beş yüz kırk iki' diye okunmaz. 'Oh - five - four - two' diye tek tek telaffuz edilir.",
        exampleSnippet: "0712 344 55 -> oh - seven - one - two - three - double four - double five",
        tipNote: "0 için 'oh' demek günlük İngilizcede 'zero' demekten çok daha yaygındır."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I have 30 years old.",
        correctExample: "I am 30 years old. / I am 30.",
        rootCause: "Türkçedeki 'yaşındayım / yaşa sahibim' mantığını doğrudan 'have' fiiliyle çevirmek.",
        memoryTip: "Yaş bir eşya değildir, sahip olunmaz! 'I AM 30' deyin."
      },
      {
        wrongExample: "She is 20 years.",
        correctExample: "She is 20. / She is 20 years old.",
        rootCause: "'years old' tamlamasının sonundaki 'old' kelimesini unutmak.",
        memoryTip: "Ya sadece sayıyı söyleyin (She is 20), ya da ikisini birlikte kullanın (years old)!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Doktor Muayenehanesinde Kayıt Açtırma",
      description: "Londra'da bir sağlık merkezinde görevlinin hastanın yaşını ve telefon numarasını kaydetmesi.",
      contextType: "daily",
      dialogue: [
        { speaker: "Clerk", textEn: "Hello, could I take your age and contact number, please?", textTr: "Merhaba, yaşınızı ve iletişim numaranızı alabilir miyim lütfen?" },
        { speaker: "Murat", textEn: "Sure. I am thirty-two years old.", textTr: "Elbette. Otuz iki yaşındayım." },
        { speaker: "Clerk", textEn: "And your mobile number?", textTr: "Peki cep telefonu numaranız?" },
        { speaker: "Murat", textEn: "It is oh - seven - nine - double one - four - five - six.", textTr: "Sıfır - yedi - dokuz - çift bir - dört - beş - altı (07911 456)." },
        { speaker: "Clerk", textEn: "Perfect, thank you Mr. Murat.", textTr: "Harika, teşekkür ederim Bay Murat." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Sayı & Yaş Mantığı",
      conceptB: "İngilizce Sayı & Yaş Mantığı",
      keyDifference: "Türkçede telefon numaraları yüzlük/onluk gruplarla (beş yüz otuz iki...) ve yaş 'sahip olunan yıl' olarak söylenir. İngilizcede telefon rakam rakam, yaş ise 'am/is/are' ile söylenir.",
      exampleA: "Yirmi beş yaşındayım. (Sahip olma eki)",
      exampleB: "I am twenty-five. (Olmak fiili)"
    },
    memoryHook: "Sayı Ritmi: 13-19 son heceye vurur (thir-TEEN!), 30-90 ilk heceye basar (THIR-ty!). Yaşta ise daima 'I AM'!",
    examples: [
      {
        en: "My grandfather is seventy-five years old and he is very active.",
        tr: "Büyükbabam yetmiş beş yaşında ve çok aktiftir.",
        highlightedWords: ["seventy-five", "years old"],
        grammarCategory: "Yaş Bildirimi",
        contextNote: "Aile bireyinin yaşını söyleme.",
        breakdownNote: "Özne (My grandfather) + is + sayı (seventy-five) + years old."
      },
      {
        en: "The conference ticket costs forty dollars, not fourteen.",
        tr: "Konferans bileti on dört değil, kırk dolar tutuyor.",
        highlightedWords: ["forty", "fourteen"],
        grammarCategory: "Sayı Vurgusu",
        contextNote: "Fiyat netleştirme.",
        breakdownNote: "Forty (40 - ilk hece vurgulu) vs Fourteen (14 - son hece vurgulu)."
      },
      {
        en: "You can reach me at oh-five-five-two, double three, four.",
        tr: "Bana 0552 334 numaralı telefondan ulaşabilirsiniz.",
        highlightedWords: ["oh-five-five-two", "double three"],
        grammarCategory: "Telefon Numarası",
        contextNote: "İletişim bilgisi paylaşımı.",
        breakdownNote: "Tek tek rakamlar + çift rakam (double three)."
      }
    ],
    vocabulary: [
      { word: "Number", phonetic: "/ˈnʌm.bər/", partOfSpeech: "noun", meaningTr: "Numara, sayı", exampleSentence: "What is your room number?" },
      { word: "Age", phonetic: "/eɪdʒ/", partOfSpeech: "noun", meaningTr: "Yaş, çağ", exampleSentence: "Please write your age on the form." },
      { word: "Double", phonetic: "/ˈdʌb.əl/", partOfSpeech: "adjective", meaningTr: "Çift, iki kat", exampleSentence: "My phone has a double seven." },
      { word: "Hundred", phonetic: "/ˈhʌn.drəd/", partOfSpeech: "noun", meaningTr: "Yüz (100)", exampleSentence: "There are one hundred seats here." }
    ],
    quickCheck: {
      question: "İngilizcede '28 yaşındayım' demek isteyen bir öğrenci hangi cümleyi kurmalıdır?",
      options: [
        "I am twenty-eight years old.",
        "I have twenty-eight years old.",
        "I am twenty-eight years.",
        "My age have twenty-eight."
      ],
      correctIndex: 0,
      explanation: "Yaş bildirirken 'am/is/are' kullanılır ve ya sadece sayı söylenir ya da 'years old' ile tamamlanır."
    },
    exercise: {
      prompt: "Aşağıdaki cümlede boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "My sister ___ twenty-two years old and lives in Manchester.",
      options: ["is", "has", "have", "are"],
      correctAnswer: "is",
      hint: "Tekil üçüncü şahıs (My sister = She) için yaş bildiren 'To Be' fiilini düşünün.",
      explanation: "Üçüncü tekil şahıslarda yaş bildirimi 'is' ile yapılır: 'My sister is 22 years old'."
    },
    sentenceBuilder: {
      promptTr: "Ben yirmi dört yaşındayım ve telefon numaram sıfır beştir.",
      targetEn: "I am twenty-four years old and my number is oh five",
      availableWords: ["I", "am", "twenty-four", "years", "old", "and", "my", "number", "is", "oh", "five", "have", "has", "twenty"],
      explanation: "Özne (I) + to be (am) + yaş (twenty-four years old) + bağlaç (and) + tel (my number is oh five)."
    },
    summaryTakeaways: [
      "13-19 arası sayılarda vurgu '-teen' hecesinde, 20-90 onluklarda ise ilk hecededir.",
      "İngilizcede yaş 'have' ile DEĞİL, 'To Be (am/is/are)' fiiliyle ifade edilir.",
      "Telefon numaraları tek tek rakam rakam okunur, 0 için yaygın olarak 'oh' denir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 4: Kişi Zamirleri (Subject Pronouns: I, You, He, She, It, We, They)
  // -------------------------------------------------------------------------
  4: {
    skillType: 'grammar',
    concreteCompetency: "İngilizce cümlelerde cümlenin öznesi olan kişi zamirlerini (I, You, He, She, It, We, They) doğru şahıs, cinsiyet ve tekillik/çoğulluk ayrımıyla hatasız kullanabilmek.",
    whyItMatters: "Türkçe 'geliyorum' dediğinizde fiilin sonundaki '-m' eki özneyi belli eder ve 'ben' demenize gerek kalmaz (pro-drop dil). Ancak İngilizcede fiiller şahıs eki taşımaz; bu yüzden cümlenin başında bir kişi zamiri koymak ZORUNLUDUR.",
    linguisticLogic: "İngilizce 'özne-zorunlu' (non-pro-drop) bir dildir. Zamirler isimlerin yerine geçerek cümledeki tekrarı önler (Örn: 'Sarah is a doctor. She works in London'). Üçüncü tekil şahısta erkekler için 'He', kadınlar için 'She', nesne ve hayvanlar için 'It' kullanılır. 'You' hem tekil 'sen' hem de çoğul 'siz' anlamına gelir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: İngilizcede Neden Her Cümlede Özne Şarttır?",
        content: "Türkçede 'Evdeyim' veya 'Okula gitti' derken şahıs ekleri özneyi anlatır. İngilizcede ise 'am at home' veya 'went to school' tek başına yarım bir cümledir; kural gereği 'I am at home' veya 'He went to school' denilerek özne açıkça yazılmalıdır.",
        formula: "CÜMLE = [Kişi Zamiri / Özne] + Fiil + Tamamlayıcı",
        keyPhrase: "I (Ben) | You (Sen/Siz) | He (O-Erkek) | She (O-Kadın) | It (O-Cansız/Hayvan) | We (Biz) | They (Onlar)",
        subPoints: [
          "Birinci tekil şahıs zamiri olan 'I' cümlenin neresinde olursa olsun DAİMA BÜYÜK HARFLE yazılır.",
          "Öznesiz İngilizce cümle kurulamaz (Emir kipleri hariç)."
        ],
        rationale: "Bu kural anlaşılmadan İngilizce söz dizimi (SVO) kurulamaz."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 3. Tekil Şahıs Cinsiyet Ayrımı (He / She / It)",
        content: "Türkçede tek bir 'O' zamiri varken, İngilizce üç farklı zamir kullanır: Erkek insanlar için 'He' (David -> He), kadın insanlar için 'She' (Mary -> She), cansız varlıklar, bitkiler, soyut kavramlar ve cinsiyeti bilinmeyen hayvanlar için 'It' (The car / The dog -> It).",
        formula: "Erkek: He  |  Kadın: She  |  Nesne/Kavram/Hayvan: It",
        keyPhrase: "David is tired. He is at home.  |  The laptop is new. It is fast.",
        subPoints: [
          "Evcil ve aileden sayılan hayvanlar için sahipleri 'He' veya 'She' diyebilir.",
          "Bebeklerin cinsiyeti bilinmiyorsa bazen 'It' kullanılabilir ancak öğrenilince 'He/She' denir."
        ],
        rationale: "Cinsiyet ayrımı İngilizcede zamir seçiminin temel dayanağıdır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Çoğul Zamirler (We, You, They)",
        content: "'We' (Biz = ben ve başkaları: Tom and I -> We), 'You' (Siz = sen ve yanındakiler), 'They' (Onlar = insanlar, nesneler veya hayvanların çoğulu: The books -> They, The children -> They). 'They' hem insanlar hem de nesneler için geçerlidir!",
        formula: "Tom and I = We  |  You and Ali = You  |  The cars / The boys = They",
        keyPhrase: "The books are on the table. They are interesting.",
        subPoints: [
          "Çok yaygın bir yanılgı 'They' zamirinin sadece insanlar için sanılmasıdır. Beş araba için de 'They' denir!",
          "'You' zamiri İngilizcede hem 'sen' hem de kibar/çoğul 'siz' demektir; fiil uyumu daima çoğul gibidir (You are)."
        ],
        rationale: "Çoğul isimlerin yerine doğru zamiri atamak ileri dilbilgisi adımlarını kolaylaştırır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Büyük 'I' Kuralı",
        formula: "I daima büyük yazılır (cümle başında, ortasında veya sonunda)",
        explanation: "İngilizcede birinci tekil şahıs 'I' kelimesi asla küçük harfle 'i' olarak yazılmaz. Bu bir imla kuralıdır.",
        exampleSnippet: "John and I are ready. (John and i YANLIŞTIR)",
        tipNote: "Klavyede küçük 'i' yazmamaya özen gösterin."
      },
      {
        ruleTitle: "They: İnsanlar VE Cansız Çoğullar",
        formula: "The students -> They  |  The computers -> They  |  The cats -> They",
        explanation: "İngilizcede 'They' sadece 'o insanlar' demek değildir. Masalar, arabalar, fikirler veya hayvanlar çoğul olduğunda da zamirleri 'They'dir.",
        exampleSnippet: "Where are my keys? - They are in your bag.",
        cautionNote: "Birden fazla nesneye asla 'It' demeyin; 'They' deyin!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Is very cold today. (Öznesiz başlangıç)",
        correctExample: "It is very cold today.",
        rootCause: "Türkçe 'Bugün hava çok soğuk' derken gizli özne kullanma alışkanlığı.",
        memoryTip: "İngilizcede hava, saat ve mesafeden bahsederken cümle başına 'IT' koymak zorunludur!"
      },
      {
        wrongExample: "Where are the pens? -> It is on the desk.",
        correctExample: "Where are the pens? -> They are on the desk.",
        rootCause: "Cansız nesnelerin çoğulu için de 'They' kullanılacağını unutmak.",
        memoryTip: "Kalemler çoğuldur; çoğul cansızlar 'THEY' zamirini alır!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Ofiste Yeni Ekip Arkadaşlarından Bahsetme",
      description: "Yeni bir projede çalışan kişileri ve ekipmanları yöneticiye özetleyen bir diyalog.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Manager", textEn: "Where is Sarah today?", textTr: "Sarah bugün nerede?" },
        { speaker: "Kemal", textEn: "She is at the client meeting. Alex is with her.", textTr: "O (kadın) müşteri toplantısında. Alex de onunla birlikte." },
        { speaker: "Manager", textEn: "And where are the project reports?", textTr: "Peki proje raporları nerede?" },
        { speaker: "Kemal", textEn: "They are ready on your desk. I printed them.", textTr: "Onlar masanızda hazır. Onları ben yazdırdım." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe: Gizli Özne (Pro-drop)",
      conceptB: "İngilizce: Zorunlu Özne Zamiri",
      keyDifference: "Türkçe fiil çekimi şahsı barındırdığı için özne atılabilir ('Geldik'). İngilizcede fiil tek başına şahsı göstermediği için 'We came' şeklinde zamir mutlaka yazılır.",
      exampleA: "Yorgunum. (Özne cümlenin içinde saklı)",
      exampleB: "I am tired. (I zamiri zorunlu)"
    },
    memoryHook: "Özne Zinciri: Erkekse HE, kadınsa SHE, tek nesne IT, hepsi çoğulsa THEY!",
    examples: [
      {
        en: "Michael is an architect. He designs modern eco-friendly buildings.",
        tr: "Michael bir mimardır. O modern çevre dostu binalar tasarlar.",
        highlightedWords: ["Michael", "He"],
        grammarCategory: "Erkek Tekil Zamiri",
        contextNote: "Michael isminin yerine 'He' zamiri.",
        breakdownNote: "Özne (Michael) yerine ikinci cümlede 'He' kullanılır."
      },
      {
        en: "Emily loves music and she plays the guitar every evening.",
        tr: "Emily müziği çok sever ve o her akşam gitar çalar.",
        highlightedWords: ["Emily", "she"],
        grammarCategory: "Kadın Tekil Zamiri",
        contextNote: "Kadın özne yerine 'She'.",
        breakdownNote: "Özne (Emily) yerine 'she' kullanılır."
      },
      {
        en: "The documents are confidential, so they are kept in the safe.",
        tr: "Belgeler gizlidir, bu yüzden kasada tutulurlar.",
        highlightedWords: ["The documents", "they"],
        grammarCategory: "Çoğul Cansız Zamiri",
        contextNote: "Çoğul nesneler için 'They'.",
        breakdownNote: "Çoğul nesne (The documents) yerine 'they' zamiri gelir."
      }
    ],
    vocabulary: [
      { word: "Subject", phonetic: "/ˈsʌb.dʒɪkt/", partOfSpeech: "noun", meaningTr: "Özne, konu", exampleSentence: "Every English sentence needs a subject." },
      { word: "Pronoun", phonetic: "/ˈprəʊ.naʊn/", partOfSpeech: "noun", meaningTr: "Zamir (adıl)", exampleSentence: "'He' and 'She' are subject pronouns." },
      { word: "Replace", phonetic: "/rɪˈpleɪs/", partOfSpeech: "verb", meaningTr: "Yerine geçmek, değiştirmek", exampleSentence: "Pronouns replace nouns in sentences." },
      { word: "Person", phonetic: "/ˈpɜː.sən/", partOfSpeech: "noun", meaningTr: "Kişi, şahıs", exampleSentence: "She is a very kind person." }
    ],
    quickCheck: {
      question: "'My brother and I' (Erkek kardeşim ve ben) özne öbeğinin yerine hangi kişi zamiri gelmelidir?",
      options: [
        "We (Biz)",
        "They (Onlar)",
        "He (O)",
        "You (Siz)"
      ],
      correctIndex: 0,
      explanation: "İçinde 'ben' (I) olan çoğul bir grup 'Biz' (We) anlamına gelir."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun kişi zamirini seçin:",
      sentence: "Where is my coat? ___ is in the wardrobe.",
      options: ["It", "He", "She", "They"],
      correctAnswer: "It",
      hint: "Tek bir cansız nesne (coat - palto) için kullanılan zamiri düşünün.",
      explanation: "Tekil cansız nesneler için 'It' zamiri kullanılır."
    },
    sentenceBuilder: {
      promptTr: "Biz hazırız çünkü onlar bize yardım ediyor.",
      targetEn: "We are ready because they help us",
      availableWords: ["We", "are", "ready", "because", "they", "help", "us", "I", "he", "she", "it"],
      explanation: "Özne 1 (We) + to be (are ready) + bağlaç (because) + özne 2 (they) + fiil (help us)."
    },
    summaryTakeaways: [
      "İngilizcede her tam cümlede bir özne bulunmak zorundadır; Türkçedeki gibi gizli özne bırakılamaz.",
      "Tekil şahıslarda cinsiyet ayrımı vardır: Erkek (He), Kadın (She), Cansız/Hayvan (It).",
      "'They' zamiri hem insanlar hem de çoğul nesneler/hayvanlar için ortaklaşa kullanılır."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 5: Ülkeler, Milliyetler ve Diller
  // -------------------------------------------------------------------------
  5: {
    skillType: 'vocabulary',
    concreteCompetency: "Ülke (Country), milliyet (Nationality) ve konuşulan dil (Language) ayrımlarını doğru edatlarla ('from' ile ülke, sıfat olarak milliyet, 'speak' ile dil) ifade edebilmek ve tüm milliyet/dil isimlerinin İngilizcede daima büyük harfle başladığını uygulamak.",
    whyItMatters: "Küresel dünyada nereli olduğunuzu, kökeninizi ve konuştuğunuz dilleri aktarmak uluslararası toplantılarda, pasaport kontrolünde ve yeni tanışmalarda ilk sorulan sorudur.",
    linguisticLogic: "İngilizcede üç kavramın dilbilgisel yapısı farklıdır: 1) Ülke (İsimdir): 'I am from Turkey / Germany'. 2) Milliyet (Sıfattır): 'I am Turkish / German'. 3) Dil (İsimdir): 'I speak Turkish / English'. En önemli imla kuralı: Türkçede diller küçük harfle yazılabilirken ('türkçe konuşuyorum'), İngilizcede BÜTÜN milliyet ve dil isimleri cümlenin neresinde olursa olsun BÜYÜK HARFLE başlar.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Ülke Bildirimi ('from' Edatının Mantığı)",
        content: "Bir ülkenin vatandaşı olduğunuzu veya oradan geldiğinizi söylerken 'from' (-den/-dan) edatı kullanılır. Formül: 'Subject + am/is/are + from + [Country]'. Ülke isimleri devletin kendi adıdır (Turkey, Italy, Japan, France).",
        formula: "Özne + am/is/are + FROM + [Ülke İsmi]",
        keyPhrase: "I am from Turkey.  |  Where are you from?",
        subPoints: [
          "'From' edatından sonra ÜLKE gelir; asla milliyet gelmez: 'I am from Turkish' KESİNLİKLE YANLIŞTIR!",
          "Bazı ülkeler 'The' alır: The United States (USA), The United Kingdom (UK), The Netherlands."
        ],
        rationale: "'From' edatı köken ve coğrafi kaynak bildirir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Milliyet Bildirimi (Doğrudan Sıfat Kullanımı)",
        content: "Milliyet söylerken 'from' KULLANILMAZ. Çünkü milliyet bir sıfattır ve 'To Be' fiilinden sonra doğrudan gelir: 'I am Turkish', 'He is Italian', 'They are Japanese'.",
        formula: "Özne + am/is/are + [Milliyet Sıfatı] (from YOK!)",
        keyPhrase: "I am Turkish.  |  She is Spanish.  |  They are German.",
        subPoints: [
          "Milliyet ekleri genellikle -ish (Turkish, British), -an/-ian (Italian, German, American), -ese (Japanese, Chinese) ile biter.",
          "Milliyet sıfatı tek başına 'from' ile birleşmez: 'He is from German' YANLIŞ; 'He is from Germany' ya da 'He is German' DOĞRU."
        ],
        rationale: "Ülke ismi ile milliyet sıfatı arasındaki söz dizimsel kategori farkını oturtmak gerekir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Konuşulan Diller ve Büyük Harf Kuralı",
        content: "Konuştuğunuz dilleri belirtmek için 'speak' fiili kullanılır: 'I speak English and Turkish'. Çoğu zaman dil ismi ile milliyet sıfatı aynı kelimedir (Spanish = İspanyol / İspanyolca). İngilizcede tüm milliyet ve dil adları daima büyük harfle başlar.",
        formula: "Özne + speak / speaks + [Büyük Harfle Dil Adı]",
        keyPhrase: "I speak French fluently.  |  Do you speak English?",
        subPoints: [
          "İmla Kuralı: english (YANLIŞ) -> English (DOĞRU), turkish (YANLIŞ) -> Turkish (DOĞRU).",
          "İki dil söylerken 'and' ile bağlanır: 'I speak German and Russian'."
        ],
        rationale: "Yazım kuralları profesyonel İngilizce yeterliliğinin birinci aynasıdır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "From + Ülke vs Doğrudan Milliyet",
        formula: "I am from TURKEY (Ülke)  =  I am TURKISH (Milliyet)",
        explanation: "'From' edatını kullanıyorsanız arkasından haritada gösterilen ülke adı (Turkey, Spain) gelmelidir. 'From' kullanmıyorsanız milliyet sıfatı (Turkish, Spanish) gelir.",
        exampleSnippet: "He is from Italy. (DOĞRU)  |  He is Italian. (DOĞRU)  |  *He is from Italian. (YANLIŞ)",
        cautionNote: "Asla 'from' ile milliyet sıfatını yan yana getirmeyin!"
      },
      {
        ruleTitle: "Zorunlu Büyük Harf Kuralı",
        formula: "Bütün Diller ve Milliyetler = BÜYÜK HARF (Capital Letter)",
        explanation: "Türkçede 'ingilizce öğreniyorum' şeklinde küçük harfle yazım sık görülse de, İngilizcede diller ve milliyetler istisnasız büyük harfle başlar: English, Turkish, Spanish, Arabic, Chinese.",
        exampleSnippet: "She studies German and French at university.",
        tipNote: "Cümlenin neresinde olursa olsun büyük harfle yazın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I am from Turkish.",
        correctExample: "I am from Turkey. / I am Turkish.",
        rootCause: "Türkçe 'Türküm' veya 'Türkiyeliyim' anlamını karmaşıklaştırıp 'from' arkasına milliyet koymak.",
        memoryTip: "From = Ülke! 'I am from Turkey' ya da 'I am Turkish' deyin."
      },
      {
        wrongExample: "I speak english and spanish.",
        correctExample: "I speak English and Spanish.",
        rootCause: "Türkçe alışkanlığıyla dil adlarını küçük harfle yazmak.",
        memoryTip: "Diller ve milliyetler İngilizcede birer özel isimdir; baş harfleri daima BÜYÜK yazılır!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Uluslararası Yaz Okulunda Tanışma",
      description: "Oxford'da bir yaz okulunun ilk gününde farklı ülkelerden gelen iki öğrencinin ülkeleri ve konuştukları diller hakkında konuşması.",
      contextType: "academic",
      dialogue: [
        { speaker: "Lucas", textEn: "Hello! Where are you from?", textTr: "Merhaba! Nerelisin?" },
        { speaker: "Zeynep", textEn: "Hi! I am from Turkey, but I live in Izmir. Are you Italian?", textTr: "Selam! Ben Türkiyeliyim, İzmir'de yaşıyorum. Sen İtalyan mısın?" },
        { speaker: "Lucas", textEn: "No, I am from Spain, so I am Spanish. Do you speak Spanish?", textTr: "Hayır, İspanyalıyım, yani İspanyolum. İspanyolca konuşuyor musun?" },
        { speaker: "Zeynep", textEn: "A little bit, but I speak English and Turkish very well.", textTr: "Çok az, ama İngilizce ve Türkçe'yi çok iyi konuşurum." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Ülke (Country)",
      conceptB: "Milliyet & Dil (Nationality & Language)",
      keyDifference: "Ülke coğrafi sınırları olan bir devlettir ve 'from' ile kullanılır. Milliyet kişinin aidiyet sıfatı, dil ise konuştuğu iletişim sistemidir; ikisi de 'from' almaz.",
      exampleA: "Japan is a beautiful country. (Ülke)",
      exampleB: "Kenji is Japanese and he speaks Japanese. (Milliyet ve Dil)"
    },
    memoryHook: "FROM görünce ÜLKEYİ seç (from Turkey)! Tek başına ise MİLLİYETİ söyle (I am Turkish)!",
    examples: [
      {
        en: "Maria is from Brazil, so she is Brazilian and she speaks Portuguese.",
        tr: "Maria Brezilyalıdır, dolayısıyla Brezilyalıdır ve Portekizce konuşur.",
        highlightedWords: ["from Brazil", "Brazilian", "Portuguese"],
        grammarCategory: "Ülke, Milliyet ve Dil",
        contextNote: "Üç kavramın tek bir cümlede tam uyumu.",
        breakdownNote: "from + Ülke (Brazil) + Milliyet (Brazilian) + Dil (Portuguese)."
      },
      {
        en: "Where are your colleagues from? - They are from Germany.",
        tr: "Meslektaşların nereli? - Onlar Almanyalı.",
        highlightedWords: ["Where are", "from", "Germany"],
        grammarCategory: "Ülke Sorma",
        contextNote: "Köken sorma sorusu ve yanıtı.",
        breakdownNote: "Where + to be + özne + from? -> They are from + Ülke."
      },
      {
        en: "Our international team speaks English, Arabic, and French.",
        tr: "Uluslararası ekibimiz İngilizce, Arapça ve Fransızca konuşuyor.",
        highlightedWords: ["speaks", "English", "Arabic", "French"],
        grammarCategory: "Diller Listesi",
        contextNote: "Şirket içi çok dillilik.",
        breakdownNote: "Fiil (speaks) + Büyük harfli diller."
      }
    ],
    vocabulary: [
      { word: "Country", phonetic: "/ˈkʌn.tri/", partOfSpeech: "noun", meaningTr: "Ülke, memleket", exampleSentence: "Which country do you want to visit?" },
      { word: "Nationality", phonetic: "/ˌnæʃ.ənˈæl.ə.ti/", partOfSpeech: "noun", meaningTr: "Milliyet, uyruk", exampleSentence: "What is your nationality on your passport?" },
      { word: "Language", phonetic: "/ˈlæŋ.ɡwɪdʒ/", partOfSpeech: "noun", meaningTr: "Dil, lisan", exampleSentence: "English is a global language." },
      { word: "Fluent", phonetic: "/ˈfluː.ənt/", partOfSpeech: "adjective", meaningTr: "Akıcı (dil)", exampleSentence: "She is fluent in German." }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi dilbilgisi ve imla kurallarına göre TAMAMEN DOĞRUDUR?",
      options: [
        "Mehmet is from Turkey and he speaks English.",
        "Mehmet is from Turkish and he speaks english.",
        "Mehmet is Turkey and he speaks English.",
        "Mehmet is from Turkey and he speaks turkish."
      ],
      correctIndex: 0,
      explanation: "'from' edatından sonra ülke adı (Turkey) gelir ve dil adının (English) baş harfi büyük yazılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "Pierre is from France, so he is ___ and speaks French.",
      options: ["French", "France", "from French", "Frenchman"],
      correctAnswer: "French",
      hint: "Kişinin milliyetini bildiren sıfatı seçin ('from' olmadan).",
      explanation: "Fransa'dan gelen kişinin milliyeti 'French' sıfatıyla ifade edilir: 'he is French'."
    },
    sentenceBuilder: {
      promptTr: "Ben İtalyalıyım ve akıcı şekilde İtalyanca ve İngilizce konuşurum.",
      targetEn: "I am from Italy and I speak Italian and English fluently",
      availableWords: ["I", "am", "from", "Italy", "and", "speak", "Italian", "English", "fluently", "Turkish", "is", "he"],
      explanation: "Özne (I am from Italy) + bağlaç (and) + fiil (I speak) + diller (Italian and English) + zarf (fluently)."
    },
    summaryTakeaways: [
      "Ülke söylerken 'from + Ülke' (I am from Turkey), milliyet söylerken doğrudan 'I am + Milliyet' (I am Turkish) denir.",
      "Asla 'I am from Turkish' denmez; 'from' sadece ülke adlarıyla birleşir.",
      "İngilizcede bütün diller ve milliyetler daima BÜYÜK HARFLE başlar."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 6: Meslekler ve Günlük Çalışma Alanları
  // -------------------------------------------------------------------------
  6: {
    skillType: 'vocabulary',
    concreteCompetency: "Meslek isimlerini (doctor, engineer, teacher, nurse, lawyer, accountant), mesleklerin önündeki 'a / an' belirteç kuralını, meslek sorma kalıplarını ('What do you do?' / 'What is your job?') ve çalışma yeri edatlarını ('work in/at') hatasız kullanabilmek.",
    whyItMatters: "Yetişkin İngilizcesinde tanışmadan hemen sonra sorulan ilk soru 'Ne iş yapıyorsunuz?' sorusudur. Mesleğinizi doğru tanımlamak profesyonel imajın ilk kuralıdır.",
    linguisticLogic: "İngilizcede meslek isimleri tekil sayılabilir isimlerdir (countable singular nouns). Bu nedenle Türkçedeki gibi 'Ben öğretmenim' deyip geçilemez; meslek isminin başına sessiz harfle başlıyorsa 'a' (a doctor, a teacher), sesli harfle başlıyorsa 'an' (an engineer, an architect) koymak DİLBİLGİSEL ZORUNLULUKTUR.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Hayati 'a / an' Belirteci Kuralı",
        content: "Türkçede 'Ben doktorum' derken bir ek veya sayı kullanmayız. İngilizcede ise tekil bir meslek tek başına yalın kalamaz! 'I am doctor' demek ağır bir gramer hatasıdır. Mutlaka 'I am a doctor' (sessiz sesle başlayanlar) veya 'She is an engineer' (sesli sesle başlayanlar) denir.",
        formula: "Özne + am/is/are + A / AN + [Meslek İsmi]",
        keyPhrase: "I am a teacher.  |  He is an engineer.  |  She is a lawyer.",
        subPoints: [
          "Sessiz harfle başlayan meslekler: a doctor, a manager, a teacher, a nurse, a pilot.",
          "Sesli harfle başlayan meslekler: an engineer, an architect, an accountant, an artist."
        ],
        rationale: "İngilizce tekil sayılabilir isimlerin başında daima bir belirteç (determiner) arar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Meslek Sorma Kalıpları: 'What do you do?'",
        content: "Birinin mesleğini sormanın en doğal ve yaygın yolu 'What do you do?' (Ne iş yapıyorsunuz?) sorusudur. 'What is your job?' sorusu da anlaşılır ama biraz daha resmi veya form doldurma havası taşır.",
        formula: "What do you do?  |  What does he/she do?  |  What is your job?",
        keyPhrase: "What do you do? - I am a software developer.",
        subPoints: [
          "'What do you do?' sorusu 'Şu anda ne yapıyorsun?' DEĞİLDİR (o soru 'What are you doing?'dir). Hayatını ne yaparak kazandığını sorar.",
          "Üçüncü şahıs için: 'What does your brother do? - He is an architect.'"
        ],
        rationale: "Geniş zamanın meslek ve genel durum sorma işlevini kavramak esastır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Çalışma Yeri ve Şirket Bildirme ('work in / at / for')",
        content: "Mesleğin yanı sıra nerede çalıştığınızı anlatırken doğru edatı seçin: Kurum veya bina için 'work in a hospital / bank'; spesifik şirket için 'work for Google / at a tech company'.",
        formula: "work in [Sektör / Bina]  |  work for [Şirket Adı]  |  work at [Kurum]",
        keyPhrase: "I work in a private hospital.  |  She works for an international firm.",
        subPoints: [
          "'Work in IT / finance' -> sektör bildirirken 'in' kullanılır.",
          "'Work for Siemens' -> şirket adının önünde 'for' tercih edilir."
        ],
        rationale: "İş hayatını eksiksiz tasvir etmek için meslek ve mekan edatları birlikte kullanılır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Mesleklerde 'a / an' Zorunluluğu",
        formula: "I am A doctor  |  She is AN architect",
        explanation: "Türkçe 'Ben mühendisim' ifadesini doğrudan çevirip 'I am engineer' demeyin! İngilizcede her tekil meslek 'a' veya 'an' almak ZORUNDADIR.",
        exampleSnippet: "My sister is a graphic designer.",
        cautionNote: "Asla 'I am teacher' veya 'He is doctor' demeyin!"
      },
      {
        ruleTitle: "What do you do? vs What are you doing?",
        formula: "What do you do? = Mesleğin nedir?  |  What are you doing? = Şu an ne yapıyorsun?",
        explanation: "Geniş zaman (do you do) mesleği sorar. Şimdiki zaman (are you doing) ise tam şu anki fiziksel eylemi sorar.",
        exampleSnippet: "What do you do? - I'm an accountant.",
        tipNote: "Biri size 'What do you do?' derse mesleğinizi söyleyin, 'Kitap okuyorum' demeyin!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I am teacher in a school.",
        correctExample: "I am a teacher in a school.",
        rootCause: "Türkçe düşünerek meslek isminin önündeki 'a' belirtecini yutmak.",
        memoryTip: "Mesleklerin önüne 'a' veya 'an' yapıştırın: 'A teacher, AN engineer!'"
      },
      {
        wrongExample: "What do you do? -> I am drinking coffee.",
        correctExample: "What do you do? -> I am a software engineer.",
        rootCause: "Meslek sorusu olan 'What do you do?' kalıbını anlık eylem sanmak.",
        memoryTip: "'What do you do?' = Ne işle meşgulsün? Mesleğini söyle!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "İş Ağları (Networking) Etkinliğinde Meslek Paylaşımı",
      description: "Londra'daki bir teknoloji konferansı kokteylinde iki uzmanın mesleklerini ve çalıştıkları şirketleri paylaşması.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Robert", textEn: "Nice conference, isn't it? What do you do, Selin?", textTr: "Güzel konferans, değil mi? Ne iş yapıyorsunuz Selin?" },
        { speaker: "Selin", textEn: "I am a data analyst. I work for a fintech company in Istanbul. And you?", textTr: "Veri analistiyim. İstanbul'da bir finans teknolojisi şirketi için çalışıyorum. Ya siz?" },
        { speaker: "Robert", textEn: "I am an enterprise software architect at Microsoft.", textTr: "Ben Microsoft'ta kurumsal yazılım mimarıyım." },
        { speaker: "Selin", textEn: "That sounds very interesting!", textTr: "Kulağa çok ilginç geliyor!" }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Meslek İfadesi",
      conceptB: "İngilizce Meslek İfadesi",
      keyDifference: "Türkçede meslek ismi doğrudan yüklem olur ('Avukatım'). İngilizcede tekil meslek daima 'a/an' artikeliyle birlikte kullanılır ('I am a lawyer').",
      exampleA: "Ali mimardır.",
      exampleB: "Ali is an architect."
    },
    memoryHook: "Meslek Kuralı: Mesleğini söylerken önüne 'A' veya 'AN' koymayı asla unutma (A doctor, AN engineer)!",
    examples: [
      {
        en: "My mother is an accountant and she works at a private bank.",
        tr: "Annem bir muhasebecidir ve özel bir bankada çalışır.",
        highlightedWords: ["an accountant", "works at a private bank"],
        grammarCategory: "Meslek ve Çalışma Yeri",
        contextNote: "Aile bireyinin mesleği ve çalıştığı kurum.",
        breakdownNote: "Özne (My mother) + is + an accountant + works at + kurum."
      },
      {
        en: "What does your brother do? - He is a commercial pilot.",
        tr: "Erkek kardeşin ne iş yapıyor? - O ticari bir pilottur.",
        highlightedWords: ["What does your brother do", "a commercial pilot"],
        grammarCategory: "3. Şahıs Meslek Sorma",
        contextNote: "Bir başkasının işini öğrenme.",
        breakdownNote: "Soru (What does + özne + do) + Yanıt (He is + a + meslek)."
      },
      {
        en: "I am a civil engineer and I work for an international construction firm.",
        tr: "Ben bir inşaat mühendisiyim ve uluslararası bir inşaat firması için çalışıyorum.",
        highlightedWords: ["a civil engineer", "work for"],
        grammarCategory: "Profesyonel Tanıtım",
        contextNote: "İş görüşmesinde kendini tanıtma.",
        breakdownNote: "I am a civil engineer + work for + şirket."
      }
    ],
    vocabulary: [
      { word: "Engineer", phonetic: "/ˌen.dʒɪˈnɪər/", partOfSpeech: "noun", meaningTr: "Mühendis", exampleSentence: "She is an electrical engineer." },
      { word: "Lawyer", phonetic: "/ˈlɔɪ.ər/", partOfSpeech: "noun", meaningTr: "Avukat", exampleSentence: "He works as a corporate lawyer." },
      { word: "Accountant", phonetic: "/əˈkaʊn.tənt/", partOfSpeech: "noun", meaningTr: "Muhasebeci", exampleSentence: "Our accountant checks the budget." },
      { word: "Workplace", phonetic: "/ˈwɜːk.pleɪs/", partOfSpeech: "noun", meaningTr: "İş yeri, çalışma ortamı", exampleSentence: "We have a friendly workplace." }
    ],
    quickCheck: {
      question: "'O bir mimardır' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "She is an architect.",
        "She is architect.",
        "She is a architect.",
        "She works architect."
      ],
      correctIndex: 0,
      explanation: "'Architect' kelimesi sesli sesle (/ɑː/) başladığı için önüne 'an' belirteci gelir: 'an architect'."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun belirteç veya kelimeyi yerleştirin:",
      sentence: "My father works in a hospital; he is ___ experienced surgeon.",
      options: ["an", "a", "the", "one"],
      correctAnswer: "an",
      hint: "'Experienced' sıfatı sesli harfle başlar.",
      explanation: "Sesli harfle başlayan sıfat tamlamalarının önüne 'an' gelir: 'an experienced surgeon'."
    },
    sentenceBuilder: {
      promptTr: "Ben bir öğretmenim ve yerel bir lisede çalışıyorum.",
      targetEn: "I am a teacher and I work in a high school",
      availableWords: ["I", "am", "a", "teacher", "and", "work", "in", "high", "school", "an", "is", "he"],
      explanation: "Meslek (I am a teacher) + bağlaç (and) + iş yeri (I work in a high school)."
    },
    summaryTakeaways: [
      "İngilizcede meslekler daima 'a' veya 'an' ile söylenir (a doctor, an engineer); tekil meslek yalın kalamaz.",
      "Meslek sormanın en doğal yolu 'What do you do?' sorusudur.",
      "Çalışılan yer için 'work in a hospital/bank' ve şirket için 'work for [şirket]' edatları kullanılır."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 7: Günler, Aylar, Mevsimler ve Tarihler
  // -------------------------------------------------------------------------
  7: {
    skillType: 'vocabulary',
    concreteCompetency: "Haftanın 7 gününü, 12 ayı ve 4 mevsimi doğru telaffuz edebilmek; günlerin önüne 'ON', ayların ve mevsimlerin önüne 'IN' edatını yerleştirebilmek ve tarihleri sıra sayılarıyla (ordinal numbers) ifade edebilmek.",
    whyItMatters: "Randevu alma, toplantı planlama, uçak rezervasyonu yapma ve doğum günü kutlama gibi bütün zaman çizelgesi gün, ay ve tarih ifadeleriyle kurulur.",
    linguisticLogic: "İngilizcede zaman kavramları hassas edat kurallarına bağlıdır: 1) Günler için daima 'ON' kullanılır (on Monday, on Friday). 2) Aylar ve mevsimler daha geniş zaman dilimleri olduğu için 'IN' kullanılır (in July, in winter). 3) Tarihler gün içerdiği için yine 'ON' alır (on the 15th of May). Gün ve ay isimleri İngilizcede DAİMA BÜYÜK HARFLE başlar.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Günler (Days of the Week) ve 'ON' Edatı",
        content: "Haftanın 7 günü: Monday (Pazartesi), Tuesday (Salı), Wednesday (Çarşamba - dikkat: 'd' okunmaz! /ˈwenz.deɪ/), Thursday (Perşembe - peltek 'th'), Friday (Cuma), Saturday (Cumartesi), Sunday (Pazar). Günlerin önüne daima 'ON' edatı gelir ve gün adları daima büyük harfle yazılır.",
        formula: "ON + [Büyük Harfle Gün Adı]",
        keyPhrase: "on Monday  |  on Wednesday afternoon  |  at the weekend",
        subPoints: [
          "Wednesday kelimesindeki ilk 'd' harfi sessizdir; 'Venzdey' (/ˈwenz.deɪ/) diye okunur.",
          "Thursday ile Tuesday sıklıkla karışır: Tuesday (/ˈtjuːz.deɪ/), Thursday (/ˈθɜːz.deɪ/ - peltek).",
          "Hafta sonu için İngiliz İngilizcesinde 'at the weekend', Amerikan İngilizcesinde 'on the weekend' denir."
        ],
        rationale: "Günlerin telaffuz ve yazım kuralları randevu trafiğinde hatayı önler."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Aylar (Months), Mevsimler (Seasons) ve 'IN' Edatı",
        content: "12 Ay: January, February, March, April, May, June, July, August, September, October, November, December. 4 Mevsim: spring (ilkbahar), summer (yaz), autumn/fall (sonbahar), winter (kış). Aylar ve mevsimler geniş zaman dilimi olduğu için içindelik bildiren 'IN' edatını alır.",
        formula: "IN + [Büyük Harfle Ay]  |  IN + [Mevsim]",
        keyPhrase: "in July  |  in December  |  in summer  |  in winter",
        subPoints: [
          "Aylar özel isim olduğu için DAİMA BÜYÜK HARFLE başlar: in May, in October.",
          "Mevsim isimleri genellikle küçük harfle yazılabilir: in spring, in summer.",
          "Sonbahar için İngilizcede 'autumn', Amerikan İngilizcesinde 'fall' yaygındır."
        ],
        rationale: "Geniş zaman dilimleri (aylar ve mevsimler) ile tekil günlerin edat ayrımı esastır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Tarih Söyleme ve Sıra Sayıları (Ordinal Numbers)",
        content: "Tarihlerde normal sayılar (1, 2, 3) yerine sıra sayıları (1st = first, 2nd = second, 3rd = third, 4th = fourth...) kullanılır. Yazılışta '15 May' veya 'May 15th' yazılsa da konuşurken 'the fifteenth of May' ya da 'May the fifteenth' şeklinde okunur. Tarihler belirli bir güne denk geldiği için başlarına 'ON' edatı alır.",
        formula: "ON + the [Sıra Sayısı] + of + [Ay]",
        keyPhrase: "on the 29th of October  |  My birthday is on May 4th.",
        subPoints: [
          "1st = first (/fɜːst/), 2nd = second (/ˈsek.ənd/), 3rd = third (/θɜːd/).",
          "Diğer tüm sayılar genellikle -th alır: 4th, 5th (fifth), 10th, 21st (twenty-first)."
        ],
        rationale: "Resmi evraklarda ve biletlerde tarihlerin doğru telaffuzu küresel gerekliliktir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Zaman Edatları: ON (Gün) vs IN (Ay/Mevsim)",
        formula: "GÜN ise = ON (on Friday, on Monday)  |  AY/MEVSİM ise = IN (in July, in winter)",
        explanation: "Belirli bir gün veya tarihten bahsediyorsanız 'ON' edatı kullanılır. Bir ayın veya mevsimin geneli söz konusuysa 'IN' kullanılır.",
        exampleSnippet: "The meeting is ON Friday.  |  The holiday is IN August.",
        cautionNote: "Asla 'in Monday' veya 'on July' demeyin!"
      },
      {
        ruleTitle: "Wednesday ve Thursday Telaffuz Kuralları",
        formula: "Wednesday = /ˈwenz.deɪ/ (Venz-dey)  |  Thursday = /ˈθɜːz.deɪ/ (Pörz-dey)",
        explanation: "Wednesday kelimesinde 'd' okunmaz. Thursday kelimesinde 'th' peltek 's/t' arası sestir, Tuesday ise 'Tyuuzdey' okunur.",
        exampleSnippet: "We have an English lesson on Wednesday and Thursday.",
        tipNote: "Wednesday'i 'Ved-nes-dey' diye okumayın!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Our exam is in Monday morning.",
        correctExample: "Our exam is on Monday morning.",
        rootCause: "Günün önüne 'in' getirme hatası. İçinde gün adı geçen her ifadenin başına 'ON' gelir.",
        memoryTip: "Günü gördüğün an 'ON' koy: on Monday, on Sunday!"
      },
      {
        wrongExample: "My birthday is on July.",
        correctExample: "My birthday is in July. / My birthday is on July 15th.",
        rootCause: "Tek başına ay ismi varken 'on' kullanmak. Belirli bir gün yoksa sadece aylar 'IN' alır.",
        memoryTip: "Sadece ay = IN July! Günlü tarih = ON July 15th!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Doktor Randevusu ve Tarih Belirleme",
      description: "Londra'daki bir klinikte sekreter ile hastanın randevu gün ve saatini netleştirmesi.",
      contextType: "daily",
      dialogue: [
        { speaker: "Secretary", textEn: "Dr. Taylor is available on Wednesday or Friday afternoon.", textTr: "Dr. Taylor Çarşamba veya Cuma öğleden sonra müsait." },
        { speaker: "Ahmet", textEn: "Friday is perfect for me. What is the date?", textTr: "Cuma benim için mükemmel. Tarih nedir?" },
        { speaker: "Secretary", textEn: "It is on the 18th of September.", textTr: "18 Eylül'de (on the eighteenth of September)." },
        { speaker: "Ahmet", textEn: "Great, please book it on Friday the 18th.", textTr: "Harika, lütfen Cuma günü ayın 18'ine ayırtın." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Günler (Days)",
      conceptB: "Aylar ve Mevsimler (Months & Seasons)",
      keyDifference: "Günler 24 saatlik spesifik takvim birimidir ve 'ON' edatı alır. Aylar ve mevsimler haftalarca süren geniş zaman bloklarıdır ve 'IN' edatı alır.",
      exampleA: "I will see you on Saturday. (Gün -> ON)",
      exampleB: "We travel in August. (Ay -> IN)"
    },
    memoryHook: "Zaman Kuralı: Günün üstüne bas: ON Friday! Ayın içine gir: IN July, IN summer!",
    examples: [
      {
        en: "Our team has a weekly project sync on Wednesday at 10 a.m.",
        tr: "Ekibimizin Çarşamba günü saat 10'da haftalık proje senkronizasyonu var.",
        highlightedWords: ["on Wednesday", "at 10 a.m."],
        grammarCategory: "Gün ve Saat",
        contextNote: "Haftalık iş toplantısı.",
        breakdownNote: "on + gün (Wednesday) + at + saat (10 a.m.)."
      },
      {
        en: "Republic Day in Turkey is celebrated on the 29th of October.",
        tr: "Türkiye'de Cumhuriyet Bayramı 29 Ekim'de kutlanır.",
        highlightedWords: ["on the 29th of October"],
        grammarCategory: "Tarih Bildirimi",
        contextNote: "Milli bayram tarihi.",
        breakdownNote: "on + the 29th of + ay (October)."
      },
      {
        en: "The weather is usually very cold in winter, especially in January.",
        tr: "Hava kışın, özellikle Ocak ayında genellikle çok soğuktur.",
        highlightedWords: ["in winter", "in January"],
        grammarCategory: "Mevsim ve Ay",
        contextNote: "Mevsimsel hava durumu tasviri.",
        breakdownNote: "in + mevsim (winter) + in + ay (January)."
      }
    ],
    vocabulary: [
      { word: "Appointment", phonetic: "/əˈpɔɪnt.mənt/", partOfSpeech: "noun", meaningTr: "Randevu", exampleSentence: "I have a dentist appointment on Tuesday." },
      { word: "Calendar", phonetic: "/ˈkæl.ən.dər/", partOfSpeech: "noun", meaningTr: "Takvim", exampleSentence: "Check the meeting on your calendar." },
      { word: "Celebrate", phonetic: "/ˈsel.ə.breɪt/", partOfSpeech: "verb", meaningTr: "Kutlamak", exampleSentence: "We celebrate her birthday in June." },
      { word: "Season", phonetic: "/ˈsiː.zən/", partOfSpeech: "noun", meaningTr: "Mevsim, sezon", exampleSentence: "Autumn is my favourite season." }
    ],
    quickCheck: {
      question: "'Toplantımız Pazartesi günü Temmuz ayında yapılacak' cümlesinde boşluklara hangi edatlar gelmelidir? -> 'Our meeting is ___ Monday, ___ July.'",
      options: [
        "on / in",
        "in / on",
        "at / in",
        "on / at"
      ],
      correctIndex: 0,
      explanation: "Günlerin önüne 'ON' (on Monday), ayların önüne ise 'IN' (in July) edatı gelir."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun zaman edatını yerleştirin:",
      sentence: "The new academic semester starts ___ the 15th of September.",
      options: ["on", "in", "at", "to"],
      correctAnswer: "on",
      hint: "Belirli bir gün bildiren tarihin (the 15th) önüne hangi edat gelir?",
      explanation: "Belirli bir gün içeren tarihlerde 'ON' kullanılır: 'on the 15th of September'."
    },
    sentenceBuilder: {
      promptTr: "Bizim projemiz Cuma günü başlıyor ve Ağustos ayında bitiyor.",
      targetEn: "Our project starts on Friday and finishes in August",
      availableWords: ["Our", "project", "starts", "on", "Friday", "and", "finishes", "in", "August", "at", "it", "the"],
      explanation: "Özne (Our project) + fiil 1 (starts on Friday) + bağlaç (and) + fiil 2 (finishes in August)."
    },
    summaryTakeaways: [
      "Haftanın günleri önüne 'ON' alır (on Monday, on Friday); aylar ve mevsimler önüne 'IN' alır (in July, in winter).",
      "Tarihler belirli bir güne denk geldiği için 'ON' alır (on the 15th of May).",
      "Gün ve ay isimlerinin baş harfi İngilizcede DAİMA BÜYÜK yazılır."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 8: Saatler ve Zaman İfadeleri (What time is it?)
  // -------------------------------------------------------------------------
  8: {
    skillType: 'vocabulary',
    concreteCompetency: "Saat sorma kalıplarını ('What time is it?' / 'Have you got the time?'), tam saatleri (o'clock), buçukları (half past), çeyrek geçe (quarter past) ve çeyrek kala (quarter to) ifadelerini, dijital saat okunuşunu ve saatlerin önündeki 'AT' edatını hatasız kullanabilmek.",
    whyItMatters: "Tren ve uçak saatlerini takip etme, randevuya tam zamanında yetişme veya günlük programı planlama için saat okuma becerisi temel bir yaşam refleksidir.",
    linguisticLogic: "İngilizcede saat söylemenin iki ana yolu vardır: 1) Geleneksel Yol (Analog): Önce dakikayı söyleyip sonra 'past' (geçe) veya 'to' (kala) edatıyla saate bağlamak (Örn: 08:15 -> quarter past eight). 2) Modern Dijital Yol: Rakamları olduğu gibi sırayla okumak (Örn: 08:15 -> eight fifteen). Belirli bir saatte bir eylemin yapılacağını söylerken daima 'AT' edatı kullanılır (at 9 o'clock).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Saat Sorma ve Tam Saatler ('o'clock')",
        content: "Saati sormak için 'What time is it?' ya da sokakta daha kibar olan 'Excuse me, what's the time?' denir. Yanıta daima 'It is / It's' ile başlanır. Yalnızca ve yalnızca TAM saatlerde 'o'clock' kelimesi kullanılır (09:00 -> It is nine o'clock).",
        formula: "Soru: What time is it?  |  Cevap: It's [Sayı] o'clock",
        keyPhrase: "What time is it? - It is eight o'clock.",
        subPoints: [
          "'o'clock' sözcüğü 'of the clock' (saatin vaktine göre) ifadesinin tarihi kısaltmasıdır.",
          "Asla küsuratlı saatlerde 'o'clock' denmez: 'It is 8:30 o'clock' KESİNLİKLE YANLIŞTIR!"
        ],
        rationale: "Temel saat kalıbı günün ilk öğrenilen zaman formülüdür."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Buçuk (Half Past) ve Çeyrek (Quarter Past / To)",
        content: "Yelkovan saatin ilk yarısındayken (01-30 geçe) 'PAST' edatı kullanılır: 15 geçe için 'quarter past' (çeyrek geçe), 30 geçe için 'half past' (buçuk). Yelkovan ikinci yarıya geçince (31-59) bir sonraki saate kalan dakika için 'TO' edatı kullanılır: 45 geçe için 'quarter to' (çeyrek kala).",
        formula: "15 geçe: quarter past [Saat]  |  30 geçe: half past [Saat]  |  15 kala: quarter to [Sonraki Saat]",
        keyPhrase: "It's half past two (02:30).  |  It's quarter past five (05:15).  |  It's quarter to six (05:45).",
        subPoints: [
          "Geleneksel yöntemde DAKİKA ÖNCE, SAAT SONRA söylenir: 'half past seven' (yedi buçuk).",
          "'Quarter to six' dendiğinde saat 6'ya çeyrek var (05:45) demektir."
        ],
        rationale: "İngilizcenin klasik zaman mekanizması dakika-önce kuralına dayanır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Pratik Dijital Saat Okunuşu ve 'AT' Edatı",
        content: "Günlük dilde ve havalimanlarında rakamları doğrudan okumak son derece yaygın ve kolaydır: 07:15 -> 'seven fifteen', 07:30 -> 'seven thirty', 07:45 -> 'seven forty-five'. Bir eylemin saat kaçta olduğunu söylerken daima 'AT' edatı gelir: 'The movie starts AT 8 p.m.'",
        formula: "Dijital: It's [Saat] + [Dakika]  |  Eylem saati: AT + [Saat]",
        keyPhrase: "The meeting is at nine o'clock.  |  I wake up at seven thirty.",
        subPoints: [
          "a.m. (gece 00:00'dan öğle 12:00'ye kadar - sabah vakti).",
          "p.m. (öğle 12:00'den gece 24:00'e kadar - öğleden sonra ve akşam).",
          "Saatlerin önüne DAİMA 'AT' gelir; asla 'in' veya 'on' gelmez."
        ],
        rationale: "Saat edatı 'AT' küresel bir kuraldır ve hata kabul etmez."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "o'clock Sadece Tam Saatlerde Kullanılır",
        formula: "07:00 = It's seven o'clock (DOĞRU)  |  07:15 = *It's seven fifteen o'clock (YANLIŞ)",
        explanation: "Dakika veya küsurat varsa 'o'clock' kelimesi KULLANILMAZ. Sadece tamı tamına sıfır sıfır (00) olan saatlerde geçerlidir.",
        exampleSnippet: "It is nine o'clock in the morning.",
        cautionNote: "09:30 derken sakın 'nine thirty o'clock' demeyin!"
      },
      {
        ruleTitle: "Saatlerin Edatı: AT",
        formula: "AT + [Saat] (at 8 o'clock, at 7:30, at noon, at midnight)",
        explanation: "Zaman çizelgesindeki noktasal anlar için 'AT' edatı kullanılır. Günler için 'ON', aylar için 'IN', saatler için ise 'AT' gelir.",
        exampleSnippet: "The flight leaves at quarter past ten.",
        tipNote: "Öğle 12:00 için 'at noon', gece 24:00 için 'at midnight' denir."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "The lesson starts in 9 o'clock.",
        correctExample: "The lesson starts at 9 o'clock.",
        rootCause: "Saatlerin önüne 'in' getirme hatası. Saatler noktasal zamandır, daima 'AT' alır.",
        memoryTip: "Saat tik tak eder, başına 'AT' gelir: AT 9 o'clock!"
      },
      {
        wrongExample: "It is half past eight o'clock.",
        correctExample: "It is half past eight. / It is eight thirty.",
        rootCause: "Küsuratlı saatlerin sonuna alışkanlıkla 'o'clock' eklemek.",
        memoryTip: "Buçukta veya çeyrekte 'o'clock' KULLANILMAZ!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Tren İstasyonunda Kalkış Saati Sorma",
      description: "Londra King's Cross istasyonunda Oxford treninin kalkış saatini öğrenen bir yolcu.",
      contextType: "travel",
      dialogue: [
        { speaker: "Passenger", textEn: "Excuse me, what time does the next train to Oxford leave?", textTr: "Affedersiniz, Oxford'a bir sonraki tren saat kaçta kalkıyor?" },
        { speaker: "Officer", textEn: "It leaves at quarter to eleven, from platform 4.", textTr: "Saat 11'e çeyrek kala (10:45), 4 numaralı perondan kalkıyor." },
        { speaker: "Passenger", textEn: "And what time is it now, please?", textTr: "Peki şu an saat kaç acaba?" },
        { speaker: "Officer", textEn: "It is exactly half past ten. You have fifteen minutes.", textTr: "Tam olarak saat on buçuk (10:30). On beş dakikanız var." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Geleneksel Saat (Past / To)",
      conceptB: "Dijital Saat (Direct Reading)",
      keyDifference: "Geleneksel yaklaşımda önce dakikalar söylenir ('half past four' = dört buçuk). Dijital yaklaşımda ise sayılar olduğu gibi art arda okunur ('four thirty'). Her ikisi de ana dili İngilizce olanlarca yaygın kullanılır.",
      exampleA: "It's quarter past nine. (09:15 - Geleneksel)",
      exampleB: "It's nine fifteen. (09:15 - Dijital)"
    },
    memoryHook: "Saat Kuralı: Tam saatte O'CLOCK, 15 geçe QUARTER PAST, 30 geçe HALF PAST, 15 kala QUARTER TO, eylem anında ise daima AT!",
    examples: [
      {
        en: "Our morning meeting starts at nine o'clock sharp.",
        tr: "Sabah toplantımız tam saat dokuzda başlar.",
        highlightedWords: ["at nine o'clock sharp"],
        grammarCategory: "Tam Saat ve Edat",
        contextNote: "İş yerinde dakiklik vurgusu ('sharp' = tamı tamına).",
        breakdownNote: "at + nine o'clock + sharp."
      },
      {
        en: "The bus arrives at half past eight (08:30) every morning.",
        tr: "Otobüs her sabah saat sekiz buçukta varır.",
        highlightedWords: ["at half past eight"],
        grammarCategory: "Buçuklu Saat",
        contextNote: "Günlük ulaşım rutini.",
        breakdownNote: "at + half past + saat (eight)."
      },
      {
        en: "Hurry up! It is already quarter to five and the bank closes at five.",
        tr: "Acele et! Saat beşe çeyrek var ve banka beşte kapanıyor.",
        highlightedWords: ["quarter to five", "at five"],
        grammarCategory: "Çeyrek Kala",
        contextNote: "Zaman kısıtı uyarısı.",
        breakdownNote: "quarter to five (04:45) + at five (05:00)."
      }
    ],
    vocabulary: [
      { word: "O'clock", phonetic: "/əˈklɒk/", partOfSpeech: "adverb", meaningTr: "Saat (tam saatlerde)", exampleSentence: "It is exactly six o'clock." },
      { word: "Quarter", phonetic: "/ˈkwɔː.tər/", partOfSpeech: "noun", meaningTr: "Çeyrek (15 dakika)", exampleSentence: "We have a quarter of an hour left." },
      { word: "Half", phonetic: "/hɑːf/", partOfSpeech: "noun", meaningTr: "Yarım, buçuk (30 dakika)", exampleSentence: "Half past seven is 07:30." },
      { word: "Midnight", phonetic: "/ˈmɪd.naɪt/", partOfSpeech: "noun", meaningTr: "Gece yarısı (24:00)", exampleSentence: "The train arrives at midnight." }
    ],
    quickCheck: {
      question: "Saat '08:45' (Dokuza çeyrek var) ifadesinin en doğru geleneksel İngilizce karşılığı hangisidir?",
      options: [
        "It is quarter to nine.",
        "It is quarter past eight.",
        "It is nine forty-five o'clock.",
        "It is quarter to eight."
      ],
      correctIndex: 0,
      explanation: "Bir sonraki saate (9) 15 dakika kaldığı için 'quarter to nine' denir."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun zaman edatını yerleştirin:",
      sentence: "The international flight will land in London ___ half past six in the evening.",
      options: ["at", "on", "in", "to"],
      correctAnswer: "at",
      hint: "Saat bildiren ifadelerin önünde hangi edat kullanılır?",
      explanation: "Saatlerin önünde daima 'at' edatı kullanılır: 'at half past six'."
    },
    sentenceBuilder: {
      promptTr: "Bizim uçağımız saat yedi buçukta kalkıyor bu yüzden acele etmeliyiz.",
      targetEn: "Our plane leaves at half past seven so we must hurry",
      availableWords: ["Our", "plane", "leaves", "at", "half", "past", "seven", "so", "we", "must", "hurry", "on", "in", "o'clock"],
      explanation: "Özne (Our plane) + fiil (leaves) + saat (at half past seven) + bağlaç (so) + sonuç (we must hurry)."
    },
    summaryTakeaways: [
      "Saat sormak için 'What time is it?' kalıbı kullanılır; yanıta 'It is / It's' ile başlanır.",
      "'o'clock' yalnızca TAM saatlerde kullanılır; dakikalı veya buçuklu saatlerde asla kullanılmaz.",
      "Bir eylemin saat kaçta yapılacağını söylerken daima 'AT' edatı gelir (at 8 o'clock, at half past two)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 9: Sınıf ve Günlük İletişim Yönergeleri (Imperatives)
  // -------------------------------------------------------------------------
  9: {
    skillType: 'speaking',
    concreteCompetency: "İngilizcede emir, talimat, rica ve yönlendirme cümlelerini (Imperatives) öznesiz olarak fiilin yalın haliyle (V1) kurabilmek; olumsuz emir için 'Don't + V1' kalıbını ve nezaket için 'Please' sözcüğünü doğru yere yerleştirebilmek.",
    whyItMatters: "Sınıf içi yönergeleri anlama (Open your book, Listen carefully), sokakta yön tarifi alma (Turn left, Go straight), acil durumlarda talimat verme (Stop, Look out) ve kullanım kılavuzlarını okuma emir kipiyle gerçekleşir.",
    linguisticLogic: "İngilizce normalde her cümlede özne ararken emir kipinde (Imperative Mood) istisnai olarak ÖZNE KULLANILMAZ. Cümle doğrudan fiilin 1. haliyle (base form) başlar: 'Open the door'. Karşıdaki kişiye 'Sen aç' dendiği bağlamdan anlaşıldığı için 'You open' denmez (You open denirse emir değil, geniş zaman cümlesi olur). Olumsuz emirde cümlenin başına 'Don't' gelir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Olumlu Emir Cümlesi Kurma (Doğrudan Yalın Fiil)",
        content: "Birine bir şey yapmasını söylemek için cümlenin başına hiçbir zamir koymadan doğrudan fiili yerleştirin: 'Listen!' (Dinle!), 'Open your book!' (Kitabını aç!), 'Sit down!' (Otur!). Fiil hiçbir ek (-s, -ed, -ing) almaz.",
        formula: "FİİL (Yalın V1) + Nesne / Tamamlayıcı",
        keyPhrase: "Open your book.  |  Listen carefully.  |  Turn left.",
        subPoints: [
          "Özne zamiri (You) KULLANILMAZ: 'You open the window' derseniz 'Sen pencereyi açarsın' anlamına gelir.",
          "Fiil daima yalındır: 'Opens the door' veya 'Opening the door' şeklinde emir verilemez."
        ],
        rationale: "Emir kipi doğrudan eyleme odaklandığı için gereksiz dilbilgisel ögeler budanır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumsuz Emir Cümlesi ('Don't + V1')",
        content: "Birine bir eylemi YAPMAMASINI söylemek için cümlenin en başına 'Don't' (veya resmi uyarılarda 'Do not') getirilir. Formül: 'Don't + Fiil (V1)': 'Don't touch!' (Dokunma!), 'Don't speak Turkish in class!' (Sınıfta Türkçe konuşmayın!).",
        formula: "DON'T + FİİL (Yalın V1) + Nesne",
        keyPhrase: "Don't touch that wire!  |  Don't be late!  |  Don't worry.",
        subPoints: [
          "'Olma' demek için 'Don't be' kullanılır: 'Don't be late!' (Geç kalma!), 'Don't be afraid!' (Korkma!).",
          "Asla 'Not open' veya 'No touch' denmez; standart olumsuzluk 'Don't' iledir."
        ],
        rationale: "Olumsuz emir kuralı İngilizcede standart 'Don't' taşıyıcısı ile kurulur."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Nezaket Katma: 'Please' Kullanımı",
        content: "Emir cümleleri yalın halleriyle sert veya kaba algılanabilir. Cümleyi nazik bir rica veya kibar bir talimata dönüştürmek için cümlenin başına veya sonuna 'please' (lütfen) eklenir. Sona gelirse önüne virgül konur.",
        formula: "Please + [Fiil V1]  VEYA  [Fiil V1] + , please",
        keyPhrase: "Please sit down.  |  Close the door, please.  |  Please don't smoke here.",
        subPoints: [
          "Cümle başında: 'Please sign here.'",
          "Cümle sonunda: 'Sign here, please.' (virgüle dikkat).",
          "Olumsuzda da geçerlidir: 'Please don't make noise.'"
        ],
        rationale: "Sosyal iletişimde emri rica çizgisine çekmenin en etkili yolu 'please'dir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Özne Kullanmama İlkesi",
        formula: "Listen to the teacher! (DOĞRU)  |  *You listen to the teacher! (YANLIŞ/SERT)",
        explanation: "Emir kipi doğrudan karşıdaki kişiye hitap eder, bu nedenle özne olan 'You' söylenmez. 'You' kullanılırsa kaba bir azarlama havası yaratır.",
        exampleSnippet: "Stand up, please! (Lütfen ayağa kalkın!)",
        cautionNote: "Emir cümlelerinin başına özne zamiri koymayın!"
      },
      {
        ruleTitle: "Olumsuz Emirde 'No' Değil, 'Don't'",
        formula: "DON'T + V1 (Don't run, Don't speak)",
        explanation: "Türk öğrencilerin en sık yaptığı hatalardan biri 'No run' veya 'Not speak' demektir. Tabelalardaki 'No Smoking' isimleşmiş bir kalıptır; cümle olarak birine emrederken mutlaka 'Don't smoke' denir.",
        exampleSnippet: "Don't park your car here, please.",
        tipNote: "Cümle kuruyorsanız daima 'Don't' ile başlayın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "No speak loudly in the library.",
        correctExample: "Don't speak loudly in the library.",
        rootCause: "Türkçe 'konuşma yok' mantığıyla 'No' kelimesini fiilin başına getirmek.",
        memoryTip: "Emirde 'NO' yok, 'DON'T' var! -> Don't speak!"
      },
      {
        wrongExample: "You open your notebook now.",
        correctExample: "Open your notebook now, please.",
        rootCause: "İngilizcede her cümleye özne koyma refleksini emir kipine de taşımak.",
        memoryTip: "Emir verirken özneyi çöpe at, doğrudan fiili söyle: OPEN!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Dil Okulu Sınıfında Öğretmen Yönergeleri",
      description: "İngilizce dersinin başında öğretmenin öğrencilere alıştırma kitabıyla ilgili verdiği talimatlar.",
      contextType: "academic",
      dialogue: [
        { speaker: "Teacher", textEn: "Good morning everyone. Please open your books to page twenty.", textTr: "Günaydın herkese. Lütfen kitaplarınızı yirminci sayfaya açın." },
        { speaker: "Student", textEn: "Should we read the text, teacher?", textTr: "Metni okuyalım mı öğretmenim?" },
        { speaker: "Teacher", textEn: "Yes, read the text silently and don't write anything yet.", textTr: "Evet, metni sessizce okuyun ve henüz hiçbir şey yazmayın." },
        { speaker: "Teacher", textEn: "Look at the board, please.", textTr: "Tahtaya bakın lütfen." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Geniş Zaman Cümlesi",
      conceptB: "Emir Kipi (Imperative)",
      keyDifference: "Geniş zaman cümlesinde eylemi yapan özne belirtilir ('You drive carefully' = Sen dikkatli araba kullanırsın). Emir kipinde özne atılır ve eylem talimata dönüşür ('Drive carefully!' = Dikkatli sür!).",
      exampleA: "You speak English. (Sen İngilizce konuşursun - Açıklama)",
      exampleB: "Speak English, please! (Lütfen İngilizce konuşun! - Talimat)"
    },
    memoryHook: "Emir Kuralı: Özneye 'Güle güle', doğrudan eyleme gir: OPEN! Yapma derken DON'T de, kibarlık için PLEASE ekle!",
    examples: [
      {
        en: "Please take a seat and fill out this registration form.",
        tr: "Lütfen oturun ve bu kayıt formunu doldurun.",
        highlightedWords: ["Please take a seat", "fill out"],
        grammarCategory: "Kibar Yönerge",
        contextNote: "Resepsiyonda müşteriye verilen kibar talimat.",
        breakdownNote: "Please + fiil 1 (take a seat) + bağlaç (and) + fiil 2 (fill out)."
      },
      {
        en: "Don't forget your passport before leaving for the airport.",
        tr: "Havalimanına gitmeden önce pasaportunu unutma.",
        highlightedWords: ["Don't forget"],
        grammarCategory: "Olumsuz Emir/Uyarı",
        contextNote: "Önemli bir hatırlatma.",
        breakdownNote: "Don't + yalın fiil (forget) + nesne (your passport)."
      },
      {
        en: "Turn right at the traffic lights and go straight ahead.",
        tr: "Trafik ışıklarından sağa dönün ve dümdüz ilerleyin.",
        highlightedWords: ["Turn right", "go straight ahead"],
        grammarCategory: "Yol Tarifi Yönergesi",
        contextNote: "Sokakta yön tarifi verme.",
        breakdownNote: "Fiil 1 (Turn right) + bağlaç (and) + fiil 2 (go straight)."
      }
    ],
    vocabulary: [
      { word: "Follow", phonetic: "/ˈfɒl.əʊ/", partOfSpeech: "verb", meaningTr: "Takip etmek, uymak (yönergeye)", exampleSentence: "Please follow the instructions on page 5." },
      { word: "Instruction", phonetic: "/ɪnˈstrʌk.ʃən/", partOfSpeech: "noun", meaningTr: "Talimat, yönerge", exampleSentence: "Read the instructions carefully." },
      { word: "Notice", phonetic: "/ˈnəʊ.tɪs/", partOfSpeech: "verb", meaningTr: "Fark etmek; (isim: uyarı/tabela)", exampleSentence: "Notice the warning sign on the door." },
      { word: "Carefully", phonetic: "/ˈkeə.fəl.i/", partOfSpeech: "adverb", meaningTr: "Dikkatle, özenle", exampleSentence: "Listen carefully to the recording." }
    ],
    quickCheck: {
      question: "'Lütfen sınıfta yüksek sesle konuşmayın' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "Please don't speak loudly in class.",
        "Please no speak loudly in class.",
        "You not speak loudly in class, please.",
        "Don't speaking loudly in class, please."
      ],
      correctIndex: 0,
      explanation: "Kibar olumsuz emir 'Please don't + yalın fiil (speak)' kalıbıyla kurulur."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "___ touch that hot surface! It is dangerous.",
      options: ["Don't", "Not", "No", "Doesn't"],
      correctAnswer: "Don't",
      hint: "Olumsuz emir cümlelerinin başında hangi yardımcı kelime yer alır?",
      explanation: "Olumsuz emir kipi doğrudan 'Don't + V1' ile başlar: 'Don't touch!'."
    },
    sentenceBuilder: {
      promptTr: "Lütfen kapıyı kapatın ve sıranıza sessizce oturun.",
      targetEn: "Please close the door and sit down quietly",
      availableWords: ["Please", "close", "the", "door", "and", "sit", "down", "quietly", "you", "not", "don't"],
      explanation: "Nezaket (Please) + fiil 1 (close the door) + bağlaç (and) + fiil 2 (sit down) + zarf (quietly)."
    },
    summaryTakeaways: [
      "Emir cümlelerinde özne (You) kullanılmaz; cümle doğrudan fiilin yalın haliyle başlar.",
      "Olumsuz emir vermek için cümlenin başına 'Don't' getirilir (Don't touch, Don't worry).",
      "Emirleri kibar bir ricaya dönüştürmek için cümlenin başına veya sonuna 'please' eklenir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 10: Temel Nezaket Kuralları ve Sosyal Formüller
  // -------------------------------------------------------------------------
  10: {
    skillType: 'speaking',
    concreteCompetency: "Günlük İngilizce iletişimde temel nezaket formüllerini (Please, Thank you, You're welcome), hata anında özür dilemeyi ('I'm sorry'), dikkat çekme/izin istemeyi ('Excuse me'), hapşırana 'Bless you' demeyi ve vedalaşma kalıplarını bağlama uygun olarak hatasız kullanabilmek.",
    whyItMatters: "Kelimeleri ve dilbilgisini bilseniz dahi nezaket formüllerini doğru yerde kullanmazsanız karşı tarafta soğuk, kaba ve mesafeli bir izlenim bırakırsınız. İngiliz kültüründe nezaket iletişimin can damarıdır.",
    linguisticLogic: "İngilizcede nezaket kalıpları durumsal (situational) kurallara bağlıdır. En kritik ayrım 'Excuse me' ile 'Sorry' arasındadır: 'Excuse me' henüz bir olay olmadan önce birinin dikkatini çekmek, yoldan geçmek veya sözünü kesmek için söylenir (proaktif). 'Sorry' ise yapılmış bir hata, çarpma veya üzücü bir durum sonrasında pişmanlık bildirmek için söylenir (reaktif). 'Thank you' dendiğinde ise 'You're welcome' ile yanıt verilir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Hayati İkili: 'Excuse me' vs 'Sorry'",
        content: "Biriyle konuşmaya başlamadan önce, sokakta adres sorarken veya trende birinin önünden geçerken 'Excuse me' (Affedersiniz / Bakar mısınız) denir. Ancak yanlışlıkla birinin ayağına bastığınızda veya bir aksaklık yarattığınızda 'Sorry' veya 'I'm sorry' (Özür dilerim) denir.",
        formula: "Dikkat çekme / İzin isteme = EXCUSE ME  |  Hata / Pişmanlık = I'M SORRY",
        keyPhrase: "Excuse me, where is the station?  |  I'm so sorry, it was my fault.",
        subPoints: [
          "Garsonu çağırırken 'Excuse me!' denir; garsona asla 'Sorry!' denmez.",
          "Biri size üzücü bir haber verdiğinde (örn. hastayım) 'I am sorry to hear that' (Bunu duyduğuma üzüldüm) denir."
        ],
        rationale: "Bu iki ifadenin karıştırılması İngilizcede en sık görülen pragmatik iletişim hatasıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Teşekkür Etmek ve Karşılık Vermek",
        content: "Teşekkür için samimi dilde 'Thanks', standart dilde 'Thank you', vurgulu dilde 'Thank you very much' kullanılır. Biri size teşekkür ettiğinde sessiz kalınmaz; 'You're welcome' (Rica ederim), 'Not at all' veya günlük dilde 'No problem / Any time' denir.",
        formula: "A: Thank you very much! -> B: You're welcome!",
        keyPhrase: "Thank you for your help. - You're welcome!",
        subPoints: [
          "'You're welcome' en güvenli ve evrensel yanıttır.",
          "'Please' teşekkür etmek için DEĞİL, rica etmek için kullanılır: 'Water, please' (Lütfen su)."
        ],
        rationale: "Teşekkür zinciri tamamlanmadığında iletişim yarım kalır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Günlük Sosyal Refleksler (Bless you, Cheers, Have a nice day)",
        content: "Biri hapşırdığında 'Bless you' (Çok yaşa / Tanrı seni korusun) denir. Ayrılırken 'Have a nice day' (İyi günler) veya 'Take care' (Kendine iyi bak) denir; karşılık olarak 'You too!' (Sana da!) denir. İngiltere'de 'Cheers' kelimesi hem 'şerefe' hem de samimi bir 'teşekkürler/hoşça kal' demektir.",
        formula: "Hapşırma: Bless you!  |  Ayrılma: Have a nice day! -> You too!",
        keyPhrase: "Bless you!  |  Have a great weekend! - You too!",
        subPoints: [
          "'Cheers' Birleşik Krallık ve Avustralya'da gayriresmi olarak 'teşekkürler' anlamında çok yaygındır.",
          "Biri 'Have a nice day' dediğinde uzun uzun cümle kurmak yerine 'You too!' demek en doğal reflekstir."
        ],
        rationale: "Sosyal refleksler dili akıcı ve sempatik kılan unsurlardır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Excuse me vs Sorry Altın Kuralı",
        formula: "Eylemden ÖNCE = Excuse me  |  Eylemden SONRA = Sorry",
        explanation: "Birinin dikkatini çekmek, soru sormak veya izin istemek için 'Excuse me' denir. İstemeden bir kabahat işlediğinizde veya üzüntü bildirdiğinizde 'Sorry' denir.",
        exampleSnippet: "Excuse me, is this seat free? (Affedersiniz, bu koltuk boş mu?)",
        cautionNote: "Garson çağırırken veya sokakta birini durdururken asla 'Sorry' demeyin!"
      },
      {
        ruleTitle: "Teşekkür Karşılığı: You're welcome",
        formula: "Thank you -> You're welcome (Rica ederim)",
        explanation: "İngilizcede teşekkür edildiğinde Türkçedeki gibi sessizce kafa sallamak kaba algılanabilir. Mutlaka 'You're welcome' veya 'My pleasure' ile karşılık verin.",
        exampleSnippet: "Thank you for the coffee. - You're welcome!",
        tipNote: "Samimi arkadaş ortamında 'No problem!' de diyebilirsiniz."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Garsonu çağırırken: 'Sorry! A glass of water!'",
        correctExample: "Excuse me! Could I have a glass of water, please?",
        rootCause: "Türkçe 'Bakar mısınız / Kusura bakmayın' ifadesini doğrudan 'Sorry' ile çevirmek.",
        memoryTip: "Dikkat çekerken daima EXCUSE ME! Özür dilerken SORRY!"
      },
      {
        wrongExample: "Thank you very much. -> Please.",
        correctExample: "Thank you very much. -> You're welcome.",
        rootCause: "Almancadaki 'Bitte' veya diğer dillerdeki kalıbı İngilizceye taşıyarak teşekkür karşılığında 'Please' demek.",
        memoryTip: "Teşekkür edilince 'Please' denmez, 'You're welcome' denir!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Metroda ve Kafede Nezaket Zinciri",
      description: "Londra metrosunda kalabalıkta yol isteyen ve kafede sipariş veren bir kişinin sosyal diyalogları.",
      contextType: "social",
      dialogue: [
        { speaker: "Passenger A", textEn: "Excuse me, could I get past, please?", textTr: "Affedersiniz, geçebilir miyim lütfen?" },
        { speaker: "Passenger B", textEn: "Oh, of course! Go ahead.", textTr: "Ah, tabii ki! Buyurun geçin." },
        { speaker: "Passenger A", textEn: "Thank you very much.", textTr: "Çok teşekkür ederim." },
        { speaker: "Passenger B", textEn: "You're welcome! Have a nice day.", textTr: "Rica ederim! İyi günler." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Excuse me",
      conceptB: "Sorry",
      keyDifference: "'Excuse me' bir etkileşim başlatmadan ÖNCE söylenir (izin isteme, dikkat çekme). 'Sorry' ise yaşanmış bir olaydan SONRA af ve pişmanlık belirtmek için söylenir.",
      exampleA: "Excuse me, what time is the flight? (Henüz konuşma yokken dikkat çekme)",
      exampleB: "I'm sorry, I broke your glass. (Kırıldıktan sonra özür dileme)"
    },
    memoryHook: "Nezaket Pusulası: Başlamadan önce EXCUSE ME, hata yapınca SORRY, teşekkür gelince YOU'RE WELCOME!",
    examples: [
      {
        en: "Excuse me, sir, is this the train to Cambridge?",
        tr: "Affedersiniz efendim, Cambridge treni bu mu?",
        highlightedWords: ["Excuse me", "sir"],
        grammarCategory: "Dikkat Çekme",
        contextNote: "İstasyonda görevliye veya yolcuya soru sorma.",
        breakdownNote: "Nezaket hitabı (Excuse me, sir) + soru cümlesi."
      },
      {
        en: "I am really sorry for being late; the traffic was terrible.",
        tr: "Geç kaldığım için gerçekten çok özür dilerim; trafik berbattı.",
        highlightedWords: ["really sorry for", "being late"],
        grammarCategory: "Özür Dileme",
        contextNote: "Toplantıya gecikme anında mazeret ve özür.",
        breakdownNote: "Özür (I am really sorry for) + fiilimsi (being late)."
      },
      {
        en: "Thank you for inviting me to your dinner party. - You're very welcome!",
        tr: "Beni akşam yemeği partinize davet ettiğiniz için teşekkür ederim. - Çok rica ederim!",
        highlightedWords: ["Thank you for", "You're very welcome"],
        grammarCategory: "Teşekkür ve Karşılık",
        contextNote: "Sosyal davet nezaketi.",
        breakdownNote: "Thank you for + isim/eylem -> You're very welcome."
      }
    ],
    vocabulary: [
      { word: "Polite", phonetic: "/pəˈlaɪt/", partOfSpeech: "adjective", meaningTr: "Kibar, nazik", exampleSentence: "It is important to be polite to everyone." },
      { word: "Welcome", phonetic: "/ˈwel.kəm/", partOfSpeech: "adjective", meaningTr: "Hoş karşılanan (You're welcome: Rica ederim)", exampleSentence: "You are always welcome in our home." },
      { word: "Pardon", phonetic: "/ˈpɑː.dən/", partOfSpeech: "noun", meaningTr: "Affedersiniz, tekrar eder misiniz?", exampleSentence: "Pardon? Could you repeat that, please?" },
      { word: "Grateful", phonetic: "/ˈɡreɪt.fəl/", partOfSpeech: "adjective", meaningTr: "Minnettar, müteşekkir", exampleSentence: "I am grateful for your kind assistance." }
    ],
    quickCheck: {
      question: "Bir kafede garsonun dikkatini çekip sipariş vermek isteyen biri konuşmaya hangi ifadeyle başlamalıdır?",
      options: [
        "Excuse me, could we order, please?",
        "Sorry, I want coffee now!",
        "Please, look at me!",
        "Pardon, give me water!"
      ],
      correctIndex: 0,
      explanation: "Birinin dikkatini kibarca çekmek için daima 'Excuse me' ile başlanır."
    },
    exercise: {
      prompt: "Biri size 'Thank you so much for your help!' dediğinde verilecek en uygun karşılık hangisidir?",
      sentence: "Thank you so much for your help! - ___!",
      options: ["You're welcome", "Please", "Excuse me", "Yes, I am"],
      correctAnswer: "You're welcome",
      hint: "Teşekkür ifadesine karşılık 'Rica ederim' anlamına gelen kalıbı seçin.",
      explanation: "'Thank you' ifadesinin evrensel karşılığı 'You're welcome'dır."
    },
    sentenceBuilder: {
      promptTr: "Affedersiniz, bana metro istasyonunu gösterebilir misiniz lütfen?",
      targetEn: "Excuse me could you show me the metro station please",
      availableWords: ["Excuse", "me", "could", "you", "show", "me", "the", "metro", "station", "please", "sorry", "where", "is"],
      explanation: "Dikkat çekme (Excuse me) + rica kalıbı (could you show me the metro station) + nezaket (please)."
    },
    summaryTakeaways: [
      "Birinin dikkatini çekmek veya izin istemek için 'Excuse me', bir hata sonrası özür dilemek için 'Sorry' denir.",
      "Teşekkür edildiğinde karşılık olarak daima 'You're welcome' denir; asla 'Please' denmez.",
      "Ayrılırken 'Have a nice day' diyen birine en doğal ve pratik karşılık 'You too!' ifadesidir."
    ]
  }
};
