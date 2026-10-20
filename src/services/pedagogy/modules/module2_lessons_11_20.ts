// LinguAAI Pedagogical Content — Level A1: Module 2 (Lessons 11–20)
// Durum Cümleleri ve Varlık Bildirimi
// 100% bespoke, CEFR A1 compliant, zero generic templates.

import { TopicBlueprint } from '../pedagogicalEngine';

export const module2_lessons_11_20: Record<number, TopicBlueprint> = {
  // -------------------------------------------------------------------------
  // LESSON 11: To Be (Am / Is / Are) — Olmak Fiili ve Temel Tanımlamalar
  // -------------------------------------------------------------------------
  11: {
    skillType: 'grammar',
    concreteCompetency: "İngilizcede hareket bildiren bir fiil bulunmayan durumlarda (meslek, kimlik, yaş, duygu, sıfat ve konum bildiren cümlelerde) 'To Be (am/is/are)' fiilini özneyle tam uyumlu ve kısaltmalarıyla (I'm, He's, They're) hatasız kullanabilmek.",
    whyItMatters: "Türkçede 'Ben öğretmenim' veya 'Hava güzel' derken yüklem bir ekten ibarettir. İngilizcede ise her cümle mutlaka bir fiile muhtaçtır. 'Am/Is/Are' köprüsü kurulmazsa İngilizce cümle ayakta duramaz ve çöker.",
    linguisticLogic: "İngilizce her tam cümlede bir 'finite verb' (çekimli fiil) arar. Sıfatlar (happy, cold) veya isimler (doctor, student) tek başlarına yüklem olamayacağından, özne ile bu tamamlayıcılar arasına 'To Be' bağlaç fiili (copula) yerleştirilir: I için 'am', tekil 3. şahıslar (He/She/It/The cat) için 'is', çoğullar ve 2. şahıs (We/You/They/The cars) için 'are' zorunludur.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Şahıs ve 'To Be' Eşleşme Matrisi",
        content: "İngilizce zamirler To Be biçimleriyle katı bir uyum içindedir. I daima 'am'; tekil 3. şahıslar (He, She, It) daima 'is'; çoğullar ve sen/siz (We, You, They) daima 'are' alır. İki tekil özne 'and' ile birleştiğinde çoğul olur (Tom and Mary are).",
        formula: "I -> AM  |  He / She / It -> IS  |  We / You / They -> ARE",
        keyPhrase: "I am ready.  |  She is a doctor.  |  They are at home.",
        subPoints: [
          "'The manager' tekil olduğu için 'is' alır: The manager is busy.",
          "'The managers' çoğul olduğu için 'are' alır: The managers are in the room.",
          "'My brother and I' iki kişi (Biz) olduğu için 'are' alır!"
        ],
        rationale: "Özne-yüklem uyumu (subject-verb agreement) İngilizce dilbilgisinin birinci kuralıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: To Be Hangi Durumlarda Kullanılır?",
        content: "To Be fiili bir eylem, koşma veya yapma bildirmez. Şu 5 temel alanı anlatır: 1) Kimlik/İsim ('I am David'), 2) Meslek ('She is an engineer'), 3) Sıfat/Duygu ('We are tired'), 4) Konum/Yer ('The keys are on the table'), 5) Yaş ('He is twenty').",
        formula: "Özne + am/is/are + [İsim / Sıfat / Konum / Yaş]",
        keyPhrase: "Alex is in Berlin.  |  The car is very fast.  |  I am twenty-five.",
        subPoints: [
          "Cümlede bir hareket/eylem fiili (go, work, eat) varsa 'To Be' yalın halde onun önüne gelmez: *I am work here YANLIŞTIR!",
          "To Be sadece durum ve kimlik bildirir."
        ],
        rationale: "Durum cümleleri ile eylem cümleleri arasındaki zihinsel sınırın çizilmesi şarttır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Konuşma Dilinde Kısaltmalar (Contractions)",
        content: "Doğal İngilizcede 'I am' yerine 'I'm', 'He is' yerine 'He's', 'They are' yerine 'They're' kullanılır. Kısaltmalar gayriresmi değil, günlük dilin ve konuşma akıcılığının en temel parçasıdır.",
        formula: "I'm / You're / He's / She's / It's / We're / They're",
        keyPhrase: "I'm ready.  |  She's happy.  |  We're late.  |  They're here.",
        subPoints: [
          "Telaffuz: You're (/jɔːr/), We're (/wɪər/), They're (/ðeər/).",
          "Resmi yazışmalarda açık hal (I am, She is), konuşmada ise kısaltma tercih edilir."
        ],
        rationale: "Kısaltmalar ana dili İngilizce olanların doğal konuşma ritmini oluşturur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Eylem Fiili ile To Be'yi Karıştırma Tuzağı",
        formula: "*I am agree (YANLIŞ) -> I agree (DOĞRU)  |  *I am live in Izmir (YANLIŞ) -> I live in Izmir (DOĞRU)",
        explanation: "Türk öğrenciler 'aynı fikirdeyim' derken To Be koymaya meyleder. Ancak 'agree' İngilizcede doğrudan bir fiildir. Cümlede zaten bir eylem fiili varken am/is/are KULLANILMAZ.",
        exampleSnippet: "She is a doctor (Durum: To Be)  |  She works in a clinic (Eylem: Fiil)",
        cautionNote: "Yalın fiilin önüne asla am/is/are koymayın!"
      },
      {
        ruleTitle: "İki Kişi = ÇOĞUL (ARE)",
        formula: "İsim + and + I = WE (are)  |  Ali and Veli = THEY (are)",
        explanation: "Özne grubunda 'and' ile bağlanmış birden fazla kişi varsa özne çoğuldur. Sonda 'I' var diye 'am' getirilmez.",
        exampleSnippet: "My colleague and I ARE responsible for this project.",
        tipNote: "İki kişi yan yana geldiyse daima ARE seçin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "My brother and I am very happy.",
        correctExample: "My brother and I are very happy.",
        rootCause: "Cümlenin sonundaki 'I' zamirine bakıp ezberden 'am' seçmek; iki kişinin çoğul (Biz) olduğunu unutmak.",
        memoryTip: "Kardeşim ve ben = BİZ (We)! We her zaman ARE alır!"
      },
      {
        wrongExample: "I am agree with your opinion.",
        correctExample: "I agree with your opinion.",
        rootCause: "Türkçe 'aynı fikirdeyim' sıfat gibi algılandığı için 'am' ekleme hatası.",
        memoryTip: "'Agree' tam bir fiildir; başına am/is/are almaz!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Yeni Bir Şirkette İlk Gün Tanışması",
      description: "İşe yeni başlayan bir mühendisin ofiste ekip arkadaşlarıyla durum ve konum cümleleri kurması.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Supervisor", textEn: "Good morning! Are you our new software engineer?", textTr: "Günaydın! Yeni yazılım mühendisimiz siz misiniz?" },
        { speaker: "Murat", textEn: "Yes, I am Murat. I am very excited to join the team.", textTr: "Evet, ben Murat. Ekibe katıldığım için çok heyecanlıyım." },
        { speaker: "Supervisor", textEn: "Welcome! Your desk is over there, next to Sarah. She is our lead designer.", textTr: "Hoş geldiniz! Masanız şurada, Sarah'nın yanında. O bizim baş tasarımcımız." },
        { speaker: "Murat", textEn: "Thank you, she is very kind.", textTr: "Teşekkür ederim, o çok nazik." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Ek Fiil (-im, -dir, -iz)",
      conceptB: "İngilizce To Be Fiili (am/is/are)",
      keyDifference: "Türkçede durum bildiren ekler kelimenin sonuna kaynaşır ('hazır-ım', 'yorgun-uz'). İngilizcede ise özne ile kelime arasına bağımsız 'am/is/are' fiili gelir.",
      exampleA: "Biz çok yorgunuz.",
      exampleB: "We are very tired."
    },
    memoryHook: "To Be Köprüsü: Özne ile Sıfat/İsim arasına 'am/is/are' köprüsünü kurmadan karşıya geçemezsin!",
    examples: [
      {
        en: "The project manager is available in the main conference room right now.",
        tr: "Proje yöneticisi şu anda ana konferans salonunda müsaittir.",
        highlightedWords: ["is available", "in the main conference room"],
        grammarCategory: "Durum ve Konum",
        contextNote: "Tekil üçüncü şahısla sıfat ve yer tamlayıcısı.",
        breakdownNote: "Özne (The project manager) + is + sıfat (available) + yer (in the conference room)."
      },
      {
        en: "Our new colleagues are very friendly and hardworking.",
        tr: "Yeni meslektaşlarımız son derece cana yakın ve çalışkanlar.",
        highlightedWords: ["are very friendly", "hardworking"],
        grammarCategory: "Çoğul Özne ve Sıfat",
        contextNote: "Çoğul şahısla niteleme.",
        breakdownNote: "Çoğul özne (Our new colleagues) + are + niteleme sıfatları."
      },
      {
        en: "I am ready for the interview and my documents are in my bag.",
        tr: "Mülakat için hazırım ve belgelerim çantamda.",
        highlightedWords: ["I am ready", "my documents are"],
        grammarCategory: "1. Tekil ve Çoğul Nesne",
        contextNote: "İki durum cümlesinin 'and' ile bağlanması.",
        breakdownNote: "I am ready + and + çoğul nesne (documents) + are."
      }
    ],
    vocabulary: [
      { word: "Available", phonetic: "/əˈveɪ.lə.bəl/", partOfSpeech: "adjective", meaningTr: "Müsait, uygun, hazır", exampleSentence: "The doctor is available today." },
      { word: "Excited", phonetic: "/ɪkˈsaɪ.tɪd/", partOfSpeech: "adjective", meaningTr: "Heyecanlı, coşkulu", exampleSentence: "We are excited about the holiday." },
      { word: "Ready", phonetic: "/ˈred.i/", partOfSpeech: "adjective", meaningTr: "Hazır", exampleSentence: "Dinner is ready on the table." },
      { word: "Tired", phonetic: "/taɪəd/", partOfSpeech: "adjective", meaningTr: "Yorgun", exampleSentence: "He is tired after the long drive." }
    ],
    quickCheck: {
      question: "Aşağıdaki cümlelerden hangisi 'To Be' özne-yüklem uyumuna göre TAMAMEN DOĞRUDUR?",
      options: [
        "Sarah and her brother are very successful architects.",
        "Sarah and her brother is very successful architects.",
        "I are ready for the presentation today.",
        "The weather am very nice in Antalya."
      ],
      correctIndex: 0,
      explanation: "'Sarah and her brother' iki kişi (They) olduğu için çoğuldur ve 'are' alır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun To Be fiilini yerleştirin:",
      sentence: "Our new office ___ on the third floor of this building.",
      options: ["is", "are", "am", "be"],
      correctAnswer: "is",
      hint: "'Our new office' tek bir mekandır (It).",
      explanation: "Tekil cansız özneler için 'is' kullanılır: 'Our new office is on the third floor'."
    },
    sentenceBuilder: {
      promptTr: "Yeni proje müdürü şu anda toplantı odasında hazırdır.",
      targetEn: "The new project manager is ready in the meeting room",
      availableWords: ["The", "new", "project", "manager", "is", "ready", "in", "meeting", "room", "are", "am", "they"],
      explanation: "Özne (The new project manager) + to be (is) + sıfat (ready) + konum (in the meeting room)."
    },
    summaryTakeaways: [
      "İngilizcede hareket fiili olmayan durumlarda 'To Be (am/is/are)' zorunlu bağlaç fiildir.",
      "I -> am, He/She/It -> is, We/You/They -> are şeklinde eşleşir.",
      "İki tekil özne birleştiğinde çoğul kabul edilir ve 'are' alır (Tom and I are)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 12: To Be: Olumsuz Cümleler ve Kısaltmalar (isn't, aren't)
  // -------------------------------------------------------------------------
  12: {
    skillType: 'grammar',
    concreteCompetency: "To Be durum fiilini olumsuz yapabilmek ('not' eki ekleyerek: am not, is not / isn't, are not / aren't) ve konuşma dilindeki doğal kısaltmaları hatasız kullanabilmek.",
    whyItMatters: "Bir durumun, kimliğin veya konumun doğru olmadığını ('Yorgun değilim', 'O evde değil', 'Biz geç kalmadık') ifade etmek günlük iletişimin en temel savunma ve bilgi düzeltme aracıdır.",
    linguisticLogic: "İngilizcede To Be fiilini olumsuz yapmak son derece basittir: 'am / is / are' fiilinin hemen arkasına olumsuzluk eki olan 'not' getirilir. Konuşma dilinde 'is not' kaynaşarak 'isn't' (/ˈɪz.ənt/), 'are not' ise 'aren't' (/ɑːnt/) olur. Ancak 'am not' için *amn't diye bir kısaltma YOKTUR; sadece 'I'm not' denir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 'NOT' Ekinin Yerleşimi",
        content: "Olumsuzluk kuralı: Özne + am/is/are + NOT + [Tamamlayıcı]. Cümledeki To Be fiilinin hemen sağına 'not' konur. Türkçe 'değil' kelimesinin tam karşılığıdır.",
        formula: "I am NOT  |  He/She/It is NOT  |  We/You/They are NOT",
        keyPhrase: "I am not ready.  |  She is not at home.  |  They are not expensive.",
        subPoints: [
          "I am not -> Ben ... değilim.",
          "He / She / It is not -> O ... değildir.",
          "We / You / They are not -> Biz/Siz/Onlar ... değillerdir."
        ],
        rationale: "Yardımcı unsurların arkasına 'not' yerleştirme kuralı tüm İngilizce olumsuzluk sisteminin temelidir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Standart Kısaltmalar: isn't ve aren't",
        content: "Günlük konuşmada ve samimi yazışmalarda 'is not' yerine 'isn't', 'are not' yerine 'aren't' denir. 'O' harfi düşer, yerine kesme işareti (') gelir.",
        formula: "is not = ISN'T (/ˈɪz.ənt/)  |  are not = AREN'T (/ɑːnt/)",
        keyPhrase: "He isn't tired.  |  We aren't late.  |  The car isn't expensive.",
        subPoints: [
          "Alternatif kısaltma: 'He's not', 'She's not', 'They're not'. İkisi de tamamen doğrudur.",
          "'He isn't' ile 'He's not' anlamca birebir aynıdır; konuşmacının vurgu tercihine bağlıdır."
        ],
        rationale: "Konuşma dilinin akıcılığı kısaltmaların doğru kullanımıyla sağlanır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: 'I am not' İstisnası (Neden *amn't Yoktur?)",
        content: "İngilizcede fonetik zorluk nedeniyle 'am not' birleşip '*amn't' OLAMAZ. Birinci tekil şahısta sadece 'I' ile 'am' birleşir ve 'I'm not' denir.",
        formula: "I'm not (DOĞRU)  |  *I amn't (BÖYLE BİR KELİME YOKTUR)",
        keyPhrase: "I'm not interested in that project.  |  I'm not sure.",
        subPoints: [
          "Her zaman: 'I'm not' kalıbını kullanın.",
          "Edebi veya bölgesel 'ain't' sözcüğü standart İngilizcede kabul edilmez ve sınavlarda yanlıştır."
        ],
        rationale: "Fonetik istisnaların bilinmesi öğrenciyi kaba hatalardan korur."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "I'm not Kuralı",
        formula: "I'm not [Sıfat/İsim/Yer]  (Asla *I amn't veya *I not demeyin)",
        explanation: "Türkçe 'Ben yorgun değilim' derken 'am' fiilini atıp '*I not tired' demek çok yaygın bir hatadır. 'Am' fiili orada kalmak zorundadır: 'I'm not tired'.",
        exampleSnippet: "I'm not hungry right now. (Şu an aç değilim.)",
        cautionNote: "Asla 'am' fiilini yutup 'I not...' demeyin!"
      },
      {
        ruleTitle: "isn't vs aren't Seçimi",
        formula: "Tekil Özne + isn't  |  Çoğul Özne + aren't",
        explanation: "Özne tekilse 'isn't' (The phone isn't working), çoğulsa 'aren't' (The phones aren't working) kullanılır.",
        exampleSnippet: "This computer isn't new, but these laptops aren't slow.",
        tipNote: "Öznenin sonundaki -s çoğul ekini kontrol edin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I not tired today.",
        correctExample: "I am not tired today. / I'm not tired today.",
        rootCause: "'am' fiilini atıp doğrudan 'not' ekleme hatası.",
        memoryTip: "NOT tek başına gelemez; önüne am/is/are ister: I'M NOT!"
      },
      {
        wrongExample: "The managers isn't in the office.",
        correctExample: "The managers aren't in the office.",
        rootCause: "Çoğul özne (managers) ile tekil olumsuz 'isn't' kullanmak.",
        memoryTip: "Özne çoğulsa (-s varsa) AREN'T gelir!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Otel Odası Şikayeti ve Durum Düzeltme",
      description: "Oteldeki bir müşterinin oda konforuyla ilgili eksiklikleri resepsiyona bildirmesi.",
      contextType: "travel",
      dialogue: [
        { speaker: "Guest", textEn: "Hello, I am in room 304. The air conditioning isn't working.", textTr: "Merhaba, 304 numaralı odadayım. Klima çalışmıyor (durumu iyi değil)." },
        { speaker: "Receptionist", textEn: "I am so sorry, sir. The technician is on duty right now.", textTr: "Çok özür dilerim efendim. Teknisyen şu an görevde." },
        { speaker: "Guest", textEn: "Also, the towels aren't clean in the bathroom.", textTr: "Ayrıca banyodaki havlular temiz değil." },
        { speaker: "Receptionist", textEn: "We will change them immediately. We aren't fully booked, I can offer another room.", textTr: "Hemen değiştireceğiz. Otelimiz tamamen dolu değil, başka bir oda teklif edebilirim." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe 'Değil' Kelimesi",
      conceptB: "İngilizce 'Not' Eki + To Be",
      keyDifference: "Türkçede 'değil' bağımsız bir kelimedir ve cümlenin sonuna gelir ('Yorgun değilim'). İngilizcede 'not' özne ile sıfatın arasına, fiilin hemen arkasına yerleşir ('I am not tired').",
      exampleA: "Hava sıcak değil. (Sonda)",
      exampleB: "The weather is not hot. (Ortada)"
    },
    memoryHook: "Olumsuz To Be: am NOT, is NOT (isn't), are NOT (aren't)! 'Not' daima fiilin arkasına yapışır!",
    examples: [
      {
        en: "David isn't at his desk because he is attending an off-site workshop.",
        tr: "David masasında değil çünkü saha dışı bir çalıştaya katılıyor.",
        highlightedWords: ["isn't at his desk"],
        grammarCategory: "Tekil Olumsuz Konum",
        contextNote: "Bir çalışanın ofiste bulunmadığını açıklama.",
        breakdownNote: "Özne (David) + isn't + yer tamlayıcısı (at his desk)."
      },
      {
        en: "These reports aren't ready yet, so please give us another hour.",
        tr: "Bu raporlar henüz hazır değil, bu yüzden lütfen bize bir saat daha verin.",
        highlightedWords: ["aren't ready yet"],
        grammarCategory: "Çoğul Olumsuz Durum",
        contextNote: "İş yerinde durum bilgilendirmesi.",
        breakdownNote: "Çoğul özne (These reports) + aren't + sıfat (ready) + zaman (yet)."
      },
      {
        en: "I'm not angry with you, I am just very tired from the long trip.",
        tr: "Sana kızgın değilim, sadece uzun yolculuktan dolayı çok yorgunum.",
        highlightedWords: ["I'm not angry"],
        grammarCategory: "1. Tekil Olumsuz Duygu",
        contextNote: "Duygu durumunu netleştirme.",
        breakdownNote: "I'm not + sıfat (angry) + edat öbeği."
      }
    ],
    vocabulary: [
      { word: "Angry", phonetic: "/ˈæŋ.ɡri/", partOfSpeech: "adjective", meaningTr: "Kızgın, öfkeli", exampleSentence: "She isn't angry with us." },
      { word: "Hungry", phonetic: "/ˈhʌŋ.ɡri/", partOfSpeech: "adjective", meaningTr: "Aç (karnı aç)", exampleSentence: "I am not hungry yet." },
      { word: "Expensive", phonetic: "/ɪkˈspen.sɪv/", partOfSpeech: "adjective", meaningTr: "Pahalı", exampleSentence: "This watch isn't expensive." },
      { word: "Late", phonetic: "/leɪt/", partOfSpeech: "adjective", meaningTr: "Geç, gecikmiş", exampleSentence: "We aren't late for the flight." }
    ],
    quickCheck: {
      question: "'Onlar ofiste değiller çünkü bugün Pazar' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "They aren't in the office because today is Sunday.",
        "They isn't in the office because today is Sunday.",
        "They not in the office because today is Sunday.",
        "They don't in the office because today is Sunday."
      ],
      correctIndex: 0,
      explanation: "'They' çoğul zamiri ile To Be olumsuzu 'aren't' (are not) kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun olumsuz biçimi yerleştirin:",
      sentence: "This meeting room ___ big enough for twenty people.",
      options: ["isn't", "aren't", "am not", "not is"],
      correctAnswer: "isn't",
      hint: "'This meeting room' tekil bir mekandır (It).",
      explanation: "Tekil özneler için 'is not' / 'isn't' kullanılır: 'room isn't big enough'."
    },
    sentenceBuilder: {
      promptTr: "Ben bu karardan memnun değilim ve şartlar adil değil.",
      targetEn: "I am not happy with this decision and conditions are not fair",
      availableWords: ["I", "am", "not", "happy", "with", "this", "decision", "and", "conditions", "are", "fair", "is", "he"],
      explanation: "1. Kısım (I am not happy with this decision) + bağlaç (and) + 2. Kısım (conditions are not fair)."
    },
    summaryTakeaways: [
      "To Be olumsuz yapmak için am/is/are fiilinin sağına 'NOT' eklenir.",
      "Konuşma dilinde 'is not' -> 'isn't' ve 'are not' -> 'aren't' olarak kısalır.",
      "'am not' için *amn't yoktur; daima 'I'm not' denir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 13: To Be: Soru Cümleleri ve Kısa Cevaplar
  // -------------------------------------------------------------------------
  13: {
    skillType: 'grammar',
    concreteCompetency: "To Be (am/is/are) ile 'Evet/Hayır' soru cümleleri kurabilmek (özne ile fiili yer değiştirerek: Is he...? Are you...?), bu sorulara doğal ve tam gramerli kısa cevaplar verebilmek ('Yes, I am. / No, I'm not.') ve kısa olumlu cevaplarda kısaltma yapılamayacağını uygulamak.",
    whyItMatters: "Birinin kimliğini, durumunu, yerini veya bir nesnenin fiyatını/özelliğini öğrenmek soru sorma refleksiyle başlar. Yanıtlarda sadece 'Yes' veya 'No' demek yerine kısa cevap kalıbını kullanmak iletişimi medeni ve akıcı kılar.",
    linguisticLogic: "İngilizcede soru sormanın altın kuralı Ters Çevirme (Inversion) prensibidir: Düz cümledeki 'Özne + Fiil' sıralaması, soru cümlesinde 'Fiil + Özne' haline gelir. Yani 'You are ready' düz cümlesi 'Are you ready?' sorusuna dönüşür. Yanıtlarda ise tüm cümle tekrarlanmaz; 'Yes, özne + be' veya 'No, özne + be + not' denir. Ancak çok önemli kural: 'Yes, I am' denir, asla *'Yes, I'm' diye kısaltma yapılmaz!",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Soru Yapma Kuralı: Ters Çevirme (Inversion)",
        content: "Düz cümledeki 'am / is / are' fiilini alıp cümlenin EN BAŞINA, yani öznenin önüne koyun. Cümlenin geri kalanına dokunmayın. Soru işareti ekleyin.",
        formula: "AM / IS / ARE + Özne + [İsim / Sıfat / Konum] ?",
        keyPhrase: "Are you ready?  |  Is he a doctor?  |  Are they at the hotel?",
        subPoints: [
          "You are tired -> Are you tired? (Yorgun musun?)",
          "Sarah is at work -> Is Sarah at work? (Sarah işte mi?)",
          "The museum is open -> Is the museum open? (Müze açık mı?)"
        ],
        rationale: "İngilizce soru formlarının neredeyse tamamı yardımcı fiilin başa gelmesiyle kurulur."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumlu Kısa Cevaplar ve 'Asla Kısaltmama' Kuralı",
        content: "Sorulan soruya 'Evet' derken: 'Yes, [özne zamiri] + am/is/are'. Buradaki EN BÜYÜK DİL KURALI: Olumlu kısa cevapların sonundaki am/is/are ASLA KISALTILMAZ!",
        formula: "Yes, I am.  |  Yes, he is.  |  Yes, we are.  |  Yes, they are.",
        keyPhrase: "Are you Turkish? - Yes, I am. (Asla *Yes, I'm DENMEZ!)",
        subPoints: [
          "'Is it cold outside? - Yes, it is.' (Asla *Yes, it's denmez!)",
          "Cümle tek başına duran bir vurgulu 'am/is/are' ile bittiği için sesin duyulması şarttır."
        ],
        rationale: "Vurgusuz zayıf hecelerle cümle bitirilemeyeceği için olumlu kısa cevapta kısaltma yasaktır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Olumsuz Kısa Cevaplar (Burada Kısaltma Serbesttir)",
        content: "Sorulan soruya 'Hayır' derken: 'No, [özne zamiri] + am/is/are + not'. Olumsuz cevaplarda kısaltma tamamen serbest ve son derece doğaldır.",
        formula: "No, I'm not.  |  No, he isn't.  |  No, they aren't.",
        keyPhrase: "Is he busy? - No, he isn't.  |  Are you hungry? - No, I'm not.",
        subPoints: [
          "Alternatif: 'No, he's not' veya 'No, they're not' da tamamen doğrudur.",
          "Sadece kuru bir 'No' demek yerine 'No, I'm not' demek konuşmayı çok daha nazik kılar."
        ],
        rationale: "Kısa cevaplar sosyal diyalogda saygılı iletişimin anahtarıdır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Hayati Sınav Kuralı: Olumlu Kısa Cevapta Kısaltma YASAKTIR!",
        formula: "Yes, I AM (DOĞRU)  |  *Yes, I'm (KESİNLİKLE YANLIŞ)  |  *Yes, he's (YANLIŞ)",
        explanation: "Olumlu kısa yanıtlarda fiil cümlenin sonundadır ve ses vurgusu taşır. Bu yüzden 'am', 'is', 'are' kelimeleri tam ve açık telaffuz edilir.",
        exampleSnippet: "Are you ready? - Yes, I am.  |  Is Sarah coming? - Yes, she is.",
        cautionNote: "Cümlenin sonu 'Yes, I'm' diye bitemez!"
      },
      {
        ruleTitle: "Özne-Soru Dönüşümü: You -> I",
        formula: "Soru: Are YOU...?  ->  Cevap: Yes, I am / No, I'm not",
        explanation: "Biri size 'Are you a student?' (Sen öğrenci misin?) dediğinde, siz 'Sen' diye değil, 'Ben' diye cevap verirsiniz: 'Yes, I am'.",
        exampleSnippet: "Are you cold? - Yes, I am.",
        tipNote: "Sorudaki 'you' cevaba 'I' olarak döner."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Are you ready? -> Yes, I'm.",
        correctExample: "Are you ready? -> Yes, I am.",
        rootCause: "Kısaltma alışkanlığını olumlu kısa cevaba da taşıma hatası.",
        memoryTip: "Evet derken kısaltma YOK: Yes, I AM! Yes, HE IS!"
      },
      {
        wrongExample: "You are doctor? (Soru tonlamasıyla düz cümle)",
        correctExample: "Are you a doctor?",
        rootCause: "Türkçedeki gibi cümlenin sırasını değiştirmeden sadece ses tonunu yükselterek soru yapmaya çalışmak.",
        memoryTip: "Fiili başa çek: ARE YOU...?"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Havalimanı Pasaport Kontrolünde Soru-Cevap",
      description: "Giriş yapan bir yolcuya pasaport polisinin sorduğu kimlik ve seyahat durumu soruları.",
      contextType: "travel",
      dialogue: [
        { speaker: "Officer", textEn: "Good afternoon. Are you traveling for business or pleasure?", textTr: "Tünaydın. İş için mi yoksa tatil için mi seyahat ediyorsunuz?" },
        { speaker: "Yolcu", textEn: "For business. I am attending a tech summit.", textTr: "İş için. Bir teknoloji zirvesine katılıyorum." },
        { speaker: "Officer", textEn: "Is this your first visit to the United Kingdom?", textTr: "Bu Birleşik Krallık'a ilk ziyaretiniz mi?" },
        { speaker: "Yolcu", textEn: "Yes, it is.", textTr: "Evet, öyle (Yes, it is)." },
        { speaker: "Officer", textEn: "Is your hotel in central London?", textTr: "Oteliniz Londra merkezde mi?" },
        { speaker: "Yolcu", textEn: "Yes, it is. It's next to London Bridge.", textTr: "Evet, öyle. London Bridge'in yanında." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe Soru Eki (-mi / -mı)",
      conceptB: "İngilizce Devrik Soru Sıralaması (Inversion)",
      keyDifference: "Türkçede kelimelerin yeri değişmez, cümlenin sonuna '-mi' eki takılır ('Hazırsın' -> 'Hazır mısın?'). İngilizcede ise fiil öznenin önüne fırlar ('You are ready' -> 'Are you ready?').",
      exampleA: "Sen hazır mısın?",
      exampleB: "Are you ready?"
    },
    memoryHook: "Soru Formülü: Fiili öne fırlat: ARE YOU...? IS HE...? Evet derken açık söyle: YES, I AM!",
    examples: [
      {
        en: "Are your parents at home right now? - No, they aren't, they are at the supermarket.",
        tr: "Ailen şu an evde mi? - Hayır değiller, süpermarketteler.",
        highlightedWords: ["Are your parents", "No, they aren't"],
        grammarCategory: "Çoğul Soru ve Kısa Cevap",
        contextNote: "Ailenin nerede olduğunu sorma.",
        breakdownNote: "Are + çoğul özne (your parents) + konum? -> No, they aren't."
      },
      {
        en: "Is this seat taken, sir? - No, it isn't. Please feel free to sit here.",
        tr: "Bu koltuk dolu mu efendim? - Hayır değil. Lütfen buraya oturabilirsiniz.",
        highlightedWords: ["Is this seat", "No, it isn't"],
        grammarCategory: "Nezaketle Koltuk Sorma",
        contextNote: "Trende veya kafede yer sorma.",
        breakdownNote: "Is + tekil nesne (this seat) + sıfat (taken)? -> No, it isn't."
      },
      {
        en: "Are you confident about tomorrow's presentation? - Yes, I am completely ready.",
        tr: "Yarınki sunum hakkında kendine güveniyor musun? - Evet, tamamen hazırım.",
        highlightedWords: ["Are you confident", "Yes, I am"],
        grammarCategory: "Durum Sorma ve Olumlu Cevap",
        contextNote: "Hazırlık durumunu sorma.",
        breakdownNote: "Are you + sıfat -> Yes, I am."
      }
    ],
    vocabulary: [
      { word: "Question", phonetic: "/ˈkwes.tʃən/", partOfSpeech: "noun", meaningTr: "Soru", exampleSentence: "May I ask you a quick question?" },
      { word: "Answer", phonetic: "/ˈɑːn.sər/", partOfSpeech: "noun", meaningTr: "Cevap, yanıt", exampleSentence: "His answer was very clear." },
      { word: "Confident", phonetic: "/ˈkɒn.fɪ.dənt/", partOfSpeech: "adjective", meaningTr: "Kendinden emin", exampleSentence: "She is confident about the test." },
      { word: "Taken", phonetic: "/ˈteɪ.kən/", partOfSpeech: "adjective", meaningTr: "Dolu, tutulmuş (yer)", exampleSentence: "Is this table taken?" }
    ],
    quickCheck: {
      question: "'Is your manager in the office today?' sorusuna verilecek en doğru olumlu kısa cevap hangisidir?",
      options: [
        "Yes, he is.",
        "Yes, he's.",
        "Yes, is he.",
        "Yes, he does."
      ],
      correctIndex: 0,
      explanation: "Olumlu kısa cevaplarda kısaltma yapılamaz; 'Yes, he is' tam biçimiyle söylenir."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun soru sözcüğünü yerleştirin:",
      sentence: "___ these laptops available for the new software developers?",
      options: ["Are", "Is", "Do", "Does"],
      correctAnswer: "Are",
      hint: "'these laptops' çoğul bir öznedir.",
      explanation: "Çoğul öznelerin To Be soru cümlelerinde 'Are' başa gelir: 'Are these laptops available?'."
    },
    sentenceBuilder: {
      promptTr: "Siz bu akşamki toplantı için hazır mısınız?",
      targetEn: "Are you ready for the meeting this evening",
      availableWords: ["Are", "you", "ready", "for", "the", "meeting", "this", "evening", "is", "am", "they"],
      explanation: "Soru (Are you) + sıfat (ready) + edat öbeği (for the meeting this evening)."
    },
    summaryTakeaways: [
      "To Be ile soru yaparken am/is/are fiili cümlenin en başına, yani öznenin önüne gelir.",
      "Olumlu kısa cevaplarda kısaltma kesinlikle yapılmaz: 'Yes, I am' (Asla *Yes, I'm denmez).",
      "Olumsuz kısa cevaplarda kısaltma serbesttir: 'No, I'm not / No, he isn't / No, they aren't'."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 14: There is & There are — Varlık Bildirimi
  // -------------------------------------------------------------------------
  14: {
    skillType: 'grammar',
    concreteCompetency: "Bir mekanda veya durumda bir şeyin 'var' olduğunu bildiren 'There is' (tekil ve sayılamayan isimler için) ve 'There are' (çoğul isimler için) yapılarını hatasız kurabilmek ve Türkçedeki 'sahip olmak (have)' ile varlık bildirme arasındaki farkı ayırt edebilmek.",
    whyItMatters: "Bir şehirde, odada, otelde veya menüde neyin var olduğunu anlatmak ('Otelde havuz var', 'Masada iki bilgisayar var', 'Bir sorun var') iletişimin en temel bilgi aktarım yöntemidir.",
    linguisticLogic: "İngilizcede varlık bildirmek için 'There + be' yapısı kullanılır. 'There' burada tek başına 'orada' demek değil; 'var' demektir. Arkasından gelen isim tekilse veya sayılamayan bir maddeyse (su, para, bilgi) 'There is'; arkasından gelen isim çoğulsa 'There are' kullanılır. Türk öğrencilerin en büyük hatası 'var' demek için 'have' fiilini öznesiz kullanmaktır (*Have a problem -> KESİNLİKLE YANLIŞTIR; 'There is a problem' DOĞRUDUR).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: 'There is' ile Tekil ve Sayılamayan Varlıklar",
        content: "Ortamda tek bir nesne varsa 'There is a / an [İsim]' denir: 'There is a car' (Bir araba var). Ayrıca sayılamayan isimlerle de (su, kahve, zaman, bilgi) daima 'There is' kullanılır: 'There is some water in the glass' (Bardakta biraz su var).",
        formula: "THERE IS + a/an [Tekil İsim]  |  THERE IS + [Sayılamayan İsim]",
        keyPhrase: "There is a meeting at 10.  |  There is enough time.  |  There's a problem.",
        subPoints: [
          "Konuşma dilinde kısaltması çok yaygındır: There is -> There's (/ðeəz/).",
          "Sayılamayanlar daima tekil muamelesi görür: 'There is money', 'There is information'."
        ],
        rationale: "Tekillik ve sayılamazlık kuralları To Be uyumunu belirler."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 'There are' ile Çoğul Varlıklar",
        content: "Ortamda birden fazla nesne, insan veya varlık varsa 'There are' kullanılır. Nesne çoğul eki (-s) veya bir sayı alır: 'There are five chairs' (Beş sandalye var), 'There are many tourists' (Birçok turist var).",
        formula: "THERE ARE + [Çoğul İsim / Sayı + İsimler]",
        keyPhrase: "There are twenty students in class.  |  There are two cars in the garage.",
        subPoints: [
          "'There are' konuşma dilinde nadiren kısaltılır; genellikle açıkça 'There are' denir.",
          "Düzensiz çoğullara dikkat edin: 'There are three people' (person çoğuludur)."
        ],
        rationale: "Çoğul öznelerde 'are' uyumu kuralıdır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Hayati Ayrım: There is vs Have",
        content: "Türkçede 'Evde iki oda var' da deriz, 'Benim iki odam var' da deriz. Ancak İngilizcede: Bir özne bir şeye SAHİPSE 'have/has' (I have a car); bir mekanda bir şey VARSA 'There is/are' (There is a car on the street) kullanılır. ÖZNESİZ 'HAVE' ASLA KULLANILMAZ!",
        formula: "Mekanda Varlık = THERE IS/ARE  |  Kişisel Sahiplik = Özne + HAVE/HAS",
        keyPhrase: "There is a big balcony in my flat. (My flat has a big balcony.)",
        subPoints: [
          "*Have a mistake on the paper YANLIŞTIR! -> 'There is a mistake on the paper' DOĞRUDUR.",
          "Cümleye asla doğrudan 'Have' ile başlanmaz."
        ],
        rationale: "Türkçe 'var' kelimesinin iki farklı İngilizce karşılığını kesin çizgilerle ayırmak gerekir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Hayati Hata: 'Have' ile Cümleye Başlanmaz!",
        formula: "There is a problem (DOĞRU)  |  *Have a problem (KESİNLİKLE YANLIŞ)",
        explanation: "Türkçe 'Bir problem var' derken kafada 'var' kelimesini 'have' olarak kodlayıp cümlenin başına 'Have' koymak çok tehlikeli bir tuzaktır. Varlık bildirirken cümlenin öznesi 'There'dir.",
        exampleSnippet: "There is an urgent email in your inbox.",
        cautionNote: "Asla 'Have a car in front of the house' demeyin!"
      },
      {
        ruleTitle: "İlk Nesne Kuralı (Proximity Rule)",
        formula: "There is an apple and two oranges (İlk nesne tekilse IS)",
        explanation: "Bir liste yaparken ilk bahsedilen nesne tekilse 'There is' (There is a book and three pens); ilk bahsedilen nesne çoğulsa 'There are' (There are three pens and a book) kullanılır.",
        exampleSnippet: "There is a pen and four notebooks on the desk.",
        tipNote: "Her zaman 'There'den sonraki İLK kelimeye bakın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "In Istanbul have many historical places.",
        correctExample: "In Istanbul, there are many historical places. / There are many historical places in Istanbul.",
        rootCause: "Türkçe 'İstanbul'da birçok tarihi yer var' cümlesindeki 'var'ı 'have' fiiliyle karşılamak.",
        memoryTip: "Bir yerde bir şey VARSA daima THERE IS / THERE ARE!"
      },
      {
        wrongExample: "There are a big TV in the living room.",
        correctExample: "There is a big TV in the living room.",
        rootCause: "Tek bir televizyon olmasına rağmen dikkatsizce 'There are' kullanmak.",
        memoryTip: "Tek bir nesne varsa (a/an varsa) -> THERE IS!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Emlakçıda Kiralık Daire Özelliklerini İnceleme",
      description: "Yeni bir daire kiralamak isteyen müşterinin emlakçıdan dairedeki odaları ve eşyaları öğrenmesi.",
      contextType: "daily",
      dialogue: [
        { speaker: "Customer", textEn: "Hello! Could you tell me about the apartment on Baker Street?", textTr: "Merhaba! Baker Street'teki daire hakkında bilgi verebilir misiniz?" },
        { speaker: "Agent", textEn: "Certainly! It is a lovely flat. There are two bedrooms and there is a large living room.", textTr: "Kesinlikle! Çok sevimli bir dairedir. İki yatak odası var ve geniş bir oturma odası var." },
        { speaker: "Customer", textEn: "Is there a balcony?", textTr: "Balkon var mı?" },
        { speaker: "Agent", textEn: "Yes, there is a sunny balcony facing the garden. Also, there are modern appliances in the kitchen.", textTr: "Evet, bahçeye bakan güneşli bir balkon var. Ayrıca mutfakta modern beyaz eşyalar var." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "There is / There are (Varlık)",
      conceptB: "Have / Has (Sahiplik)",
      keyDifference: "'There is/are' bir nesnenin mekandaki veya durumdaki mevcudiyetini anlatır. 'Have/has' ise bir kişinin veya kurumun mülkiyetini gerektirir.",
      exampleA: "There is a cat in the garden. (Bahçede bir kedi var - Varlık)",
      exampleB: "I have a cat. (Benim bir kedim var - Sahiplik)"
    },
    memoryHook: "Varlık Terazisi: Tekilse THERE IS (There's a cat!), çoğulsa THERE ARE (There are three cats!). Asla tek başına 'Have' ile başlama!",
    examples: [
      {
        en: "There is an urgent document waiting on the manager's desk.",
        tr: "Müdürün masasında bekleyen acil bir belge var.",
        highlightedWords: ["There is an urgent document"],
        grammarCategory: "Tekil Varlık Bildirimi",
        contextNote: "Ofiste tek bir evrakın varlığı.",
        breakdownNote: "There is + an urgent document + konum (on the desk)."
      },
      {
        en: "There are twenty dedicated employees in our software development department.",
        tr: "Yazılım geliştirme departmanımızda yirmi özverili çalışan var.",
        highlightedWords: ["There are twenty", "employees"],
        grammarCategory: "Çoğul Varlık Bildirimi",
        contextNote: "Şirket çalışan sayısı.",
        breakdownNote: "There are + sayı ve çoğul isim (twenty employees) + yer."
      },
      {
        en: "There is enough coffee and tea in the cafeteria for all guests.",
        tr: "Kafeteryada tüm misafirler için yeterli kahve ve çay var.",
        highlightedWords: ["There is enough coffee"],
        grammarCategory: "Sayılamayan Varlık",
        contextNote: "Sayılamayan içecek maddesi.",
        breakdownNote: "There is + sayılamayan isim (coffee) + yer."
      }
    ],
    vocabulary: [
      { word: "Furniture", phonetic: "/ˈfɜː.nɪ.tʃər/", partOfSpeech: "noun", meaningTr: "Mobilya (sayılamaz!)", exampleSentence: "There is modern furniture in the office." },
      { word: "Facility", phonetic: "/fəˈsɪl.ə.ti/", partOfSpeech: "noun", meaningTr: "Tesis, olanak", exampleSentence: "There are sports facilities at the hotel." },
      { word: "Balcony", phonetic: "/ˈbæl.kə.ni/", partOfSpeech: "noun", meaningTr: "Balkon", exampleSentence: "There is a small balcony in my flat." },
      { word: "Appliance", phonetic: "/əˈplaɪ.əns/", partOfSpeech: "noun", meaningTr: "Ev aleti, cihaz", exampleSentence: "There are new kitchen appliances." }
    ],
    quickCheck: {
      question: "'Mutfakta üç temiz bardak var' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "There are three clean glasses in the kitchen.",
        "There is three clean glasses in the kitchen.",
        "In the kitchen has three clean glasses.",
        "Have three clean glasses in the kitchen."
      ],
      correctIndex: 0,
      explanation: "'three clean glasses' çoğul bir nesne grubu olduğundan 'There are' kullanılmalıdır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun varlık kalıbını yerleştirin:",
      sentence: "___ several important questions from the audience after the presentation.",
      options: ["There were", "There are", "There is", "It has"],
      correctAnswer: "There are",
      hint: "'several important questions' çoğul bir isim grubudur.",
      explanation: "Çoğul isimlerin mevcudiyetini bildirmek için geniş zamanda 'There are' kullanılır."
    },
    sentenceBuilder: {
      promptTr: "Müdürün masasında incelenmesi gereken iki acil rapor vardır.",
      targetEn: "There are two urgent reports on the desk to review",
      availableWords: ["There", "are", "two", "urgent", "reports", "on", "the", "desk", "to", "review", "is", "have", "has"],
      explanation: "Varlık (There are) + çoğul nesne (two urgent reports) + konum (on the desk) + amaç (to review)."
    },
    summaryTakeaways: [
      "Tekil ve sayılamayan isimlerin varlığını bildirmek için 'There is', çoğullar için 'There are' kullanılır.",
      "İngilizcede varlık bildirmek için asla öznesiz 'Have' ile cümleye başlanmaz (*Have a car denmez).",
      "Listenin ilk sırasındaki nesne tekilse 'There is', çoğulsa 'There are' tercih edilir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 15: There is / are: Olumsuz ve Soru Halleri (Is there? / Are there?)
  // -------------------------------------------------------------------------
  15: {
    skillType: 'grammar',
    concreteCompetency: "There is / There are yapılarının olumsuz biçimlerini (There isn't a..., There aren't any...) ve soru hallerini (Is there a...? Are there any...?) kurabilmek, 'any' kelimesinin olumsuz ve sorulardaki rolünü hatasız uygulayabilmek.",
    whyItMatters: "Bir otelde Wi-Fi olup olmadığını sormak ('Is there Wi-Fi here?'), alışverişte bir ürünün kalıp kalmadığını öğrenmek ('Are there any apples?') veya bir eksikliği belirtmek ('There aren't any clean towels') hayati günlük gereksinimlerdir.",
    linguisticLogic: "Soru yaparken To Be kuralı aynen geçerlidir: 'is' veya 'are' başa gelir -> 'Is there...?' (tekil/sayılamayan) veya 'Are there...?' (çoğul). Olumsuz yaparken 'not' eklenir: 'There isn't' veya 'There aren't'. En kritik gramer kuralı: Çoğul ve sayılamayan isimlerle soru ve olumsuz cümle kurarken 'hiç' anlamına gelen 'ANY' kelimesi devreye girer: 'There aren't any pens' (Hiç kalem yok), 'Are there any questions?' (Hiç soru var mı?).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Soru Yapma: 'Is there...?' ve 'Are there...?'",
        content: "Düz cümledeki 'is/are' kelimesini 'there'in önüne alarak soru yapılır. Tekil bir şey soruyorsanız: 'Is there a / an...?'. Çoğul bir şey soruyorsanız: 'Are there any...?'.",
        formula: "Tekil: IS THERE a/an [İsim] ?  |  Çoğul: ARE THERE any [Çoğul İsim] ?",
        keyPhrase: "Is there a pharmacy near here?  |  Are there any vegetarian options?",
        subPoints: [
          "Sayılamayanlarla da 'Is there' kullanılır: 'Is there any milk in the fridge?' (Dolapta hiç süt var mı?).",
          "Kısa Cevaplar: 'Yes, there is. / No, there isn't.' veya 'Yes, there are. / No, there aren't.'"
        ],
        rationale: "Yardımcı fiilin başa geçmesi soru formasyonunun evrensel adımıdır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Olumsuz Cümle: 'There isn't' ve 'There aren't any'",
        content: "Bir şeyin olmadığını söylemek için 'There is not (isn't)' veya 'There are not (aren't)' kullanılır. Çoğul isimlerin önünde 'hiç' anlamında 'any' bulunması İngilizcede doğal standarttır.",
        formula: "Tekil: There isn't a/an [İsim]  |  Çoğul: There aren't ANY [Çoğul İsim]",
        keyPhrase: "There isn't a lift in the building.  |  There aren't any empty seats.",
        subPoints: [
          "Alternatif: 'There is NO milk' ya da 'There are NO chairs' (Burada 'no' olumsuzluk katar ve 'not' kullanılmaz).",
          "'There aren't any tickets left' = Hiç bilet kalmadı."
        ],
        rationale: "'Any' kelimesi olumsuz ve soru bağlamlarının vazgeçilmez belirtecidir."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Kısa Cevap Standartları",
        content: "Tıpkı To Be dersindeki gibi, olumlu kısa cevaplarda kısaltma yapılmaz: 'Yes, there is' (Asla *Yes, there's denmez!). Olumsuzda ise kısaltma standarttır: 'No, there isn't' / 'No, there aren't'.",
        formula: "Yes, there is.  |  No, there isn't.  |  Yes, there are.  |  No, there aren't.",
        keyPhrase: "Is there Wi-Fi? - Yes, there is.  |  Are there any towels? - No, there aren't.",
        subPoints: [
          "Olumlu kısa cevapta 'there is' tam söylenir.",
          "Cevapta özne yine 'there' olarak korunur (Yes, it is denmez)."
        ],
        rationale: "Soruya yöneltilen yapının yanıtla birebir gramer uyumu içinde olması gerekir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Soru ve Olumsuzda 'ANY' Kuralı",
        formula: "Olumsuz Çoğul: There aren't ANY ...  |  Soru Çoğul: Are there ANY ...?",
        explanation: "İngilizcede çoğul veya sayılamayan bir varlığın olup olmadığını sorarken veya olmadığını söylerken 'some' değil, 'any' kullanılır.",
        exampleSnippet: "Are there any questions? - No, there aren't any questions.",
        cautionNote: "Olumsuz cümlede 'There aren't some...' demeyin, 'any' deyin!"
      },
      {
        ruleTitle: "There is no vs There isn't any",
        formula: "There is no water  =  There isn't any water",
        explanation: "'No' kendi içinde olumsuzluk barındırır, bu yüzden fiil olumlu kalır (is/are). 'Any' ise cümlenin fiilinde olumsuzluk eki (isn't/aren't) gerektirir.",
        exampleSnippet: "There are no rooms available. = There aren't any rooms available.",
        tipNote: "İki olumsuzu aynı anda kullanmayın (*There isn't no... YANLIŞTIR)."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "Are there some chairs in the room?",
        correctExample: "Are there any chairs in the room?",
        rootCause: "Soru cümlelerinde çoğul isimlerin önüne 'some' getirme yanılgısı.",
        memoryTip: "Soruda ve olumsuzda 'SOME' gider, 'ANY' gelir!"
      },
      {
        wrongExample: "Is there a swimming pool? -> Yes, there's.",
        correctExample: "Is there a swimming pool? -> Yes, there is.",
        rootCause: "Olumlu kısa cevapta kısaltma yasağını unutmak.",
        memoryTip: "Cümlenin sonu 'there's' ile bitemez; 'Yes, there IS' deyin!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Otel Resepsiyonunda Olanakları Sorgulama",
      description: "Otele yeni giriş yapan bir gezginin otel imkanlarını ve odadaki donanımı sorgulaması.",
      contextType: "travel",
      dialogue: [
        { speaker: "Guest", textEn: "Excuse me, is there a fitness centre in this hotel?", textTr: "Affedersiniz, bu otelde bir spor salonu var mı?" },
        { speaker: "Clerk", textEn: "Yes, there is. It is on the basement floor and open 24 hours.", textTr: "Evet, var. Bodrum katta ve 24 saat açıktır." },
        { speaker: "Guest", textEn: "Great. And are there any extra blankets in the room?", textTr: "Harika. Peki odada hiç ekstra battaniye var mı?" },
        { speaker: "Clerk", textEn: "No, there aren't, but housekeeping can bring some immediately.", textTr: "Hayır yok, ancak kat hizmetleri hemen getirebilir." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Some (Olumlu Cümle)",
      conceptB: "Any (Olumsuz & Soru)",
      keyDifference: "'Some' birkaç/biraz anlamında olumlu cümlelerde varlığı onaylar ('There are some chairs'). 'Any' ise olumsuzda 'hiç' ('There aren't any chairs') ve soruda 'hiç var mı?' ('Are there any chairs?') anlamını taşır.",
      exampleA: "There are some books on the shelf. (Olumlu)",
      exampleB: "Are there any books on the shelf? (Soru)"
    },
    memoryHook: "Varlık Sorusu: Başa al: IS THERE? / ARE THERE? Olumsuzda ve soruda çoğula 'ANY' bağla!",
    examples: [
      {
        en: "Is there an ATM near the train station where I can withdraw cash?",
        tr: "Tren istasyonunun yakınında nakit çekebileceğim bir ATM var mı?",
        highlightedWords: ["Is there an ATM"],
        grammarCategory: "Tekil Varlık Sorusu",
        contextNote: "Sokakta hizmet noktası arama.",
        breakdownNote: "Is there + an ATM + yer tamlayıcısı (near the train station)."
      },
      {
        en: "There aren't any available parking spaces in front of the shopping mall.",
        tr: "Alışveriş merkezinin önünde hiç boş park yeri yok.",
        highlightedWords: ["There aren't any", "parking spaces"],
        grammarCategory: "Çoğul Olumsuz Varlık",
        contextNote: "Otopark doluluğu bildirimi.",
        breakdownNote: "There aren't + any + çoğul isim (parking spaces) + yer."
      },
      {
        en: "Are there any vegetarian alternatives on the dinner menu? - Yes, there are.",
        tr: "Akşam yemeği menüsünde hiç vejetaryen alternatif var mı? - Evet, var.",
        highlightedWords: ["Are there any", "Yes, there are"],
        grammarCategory: "Çoğul Soru ve Kısa Cevap",
        contextNote: "Restoranda menü içeriği sorma.",
        breakdownNote: "Are there any + çoğul isim -> Yes, there are."
      }
    ],
    vocabulary: [
      { word: "ATM", phonetic: "/ˌeɪ.tiːˈem/", partOfSpeech: "noun", meaningTr: "Bankamatik", exampleSentence: "Is there an ATM nearby?" },
      { word: "Space", phonetic: "/speɪs/", partOfSpeech: "noun", meaningTr: "Alan, yer, boşluk", exampleSentence: "There is enough space for everyone." },
      { word: "Blanket", phonetic: "/ˈblæŋ.kɪt/", partOfSpeech: "noun", meaningTr: "Battaniye", exampleSentence: "Are there any extra blankets?" },
      { word: "Alternative", phonetic: "/ɒlˈtɜː.nə.tɪv/", partOfSpeech: "noun", meaningTr: "Alternatif, seçenek", exampleSentence: "Is there another alternative?" }
    ],
    quickCheck: {
      question: "'Buzdolabında hiç süt yok' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "There isn't any milk in the fridge.",
        "There aren't any milk in the fridge.",
        "There is some milk in the fridge.",
        "There isn't no milk in the fridge."
      ],
      correctIndex: 0,
      explanation: "'Milk' sayılamayan bir isim olduğu için tekildir ('isn't') ve olumsuzda 'any' ile kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "___ any direct trains from this platform to London airport?",
      options: ["Are there", "Is there", "There are", "Do there"],
      correctAnswer: "Are there",
      hint: "'direct trains' çoğul bir nesnedir ve bir soru cümlesidir.",
      explanation: "Çoğul nesnelerin varlığı sorulurken 'Are there' kullanılır: 'Are there any direct trains?'."
    },
    sentenceBuilder: {
      promptTr: "Bu caddede hiç eczane var mı? - Hayır, hiç yok.",
      targetEn: "Is there a pharmacy on this street no there isn't",
      availableWords: ["Is", "there", "a", "pharmacy", "on", "this", "street", "no", "isn't", "are", "any", "some"],
      explanation: "Soru (Is there a pharmacy on this street) + yanıt (no there isn't)."
    },
    summaryTakeaways: [
      "There is/are sorularında 'Is there...?' veya 'Are there...?' şeklinde yardımcı fiil başa geçer.",
      "Çoğul ve sayılamayan isimlerin soru ve olumsuz hallerinde 'hiç' anlamında 'ANY' kullanılır.",
      "Olumlu kısa cevapta kısaltma yapılmaz: 'Yes, there is / Yes, there are'."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 16: Temel Konum Edatları: In, On, Under, Next to, Behind
  // -------------------------------------------------------------------------
  16: {
    skillType: 'grammar',
    concreteCompetency: "Nesnelerin ve insanların mekandaki fiziksel konumunu bildiren temel edatları (in, on, under, next to, behind, in front of, between) ve konum sorma kalıbı 'Where is / Where are...?' yapısını hatasız kullanabilmek.",
    whyItMatters: "Kayıp bir eşyayı ararken ('Anahtarlarım nerede?'), bir adresi tarif ederken veya ofiste bir dosyayı yönlendirirken ('Rapor masanın üzerinde, kutunun içinde') doğru edat hayati önem taşır.",
    linguisticLogic: "İngilizcede konum edatları (Prepositions of Place) fiziksel temas ve uzamsal ilişkiye göre kesin kurallara ayrılır: 1) 'IN' üç boyutlu bir alanın veya kabın İÇİNDE olmayı belirtir (in the box, in the room). 2) 'ON' yatay veya dikey iki boyutlu bir YÜZEYLE temas etmeyi belirtir (on the table, on the wall). 3) 'UNDER' altında, 4) 'NEXT TO' hemen bitişiğinde/yanında, 5) 'BEHIND' arkasında, 6) 'IN FRONT OF' önünde, 7) 'BETWEEN' iki şeyin arasında anlamına gelir.",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: IN (İçinde) ve ON (Üzerinde / Yüzeyde) Ayrımı",
        content: "Türkçede 'kutuda' veya 'masada' derken aynı '-de/-da' ekini kullanırız. Ancak İngilizcede: Nesne sınırları olan bir hacmin içindeyse 'IN' (in my pocket, in the car); nesne bir yüzeye temas edip onun üstünde duruyorsa 'ON' (on the desk, on the floor, on the wall) kullanılır.",
        formula: "IN + [3D Kap/Hacim/Oda]  |  ON + [2D Yüzey/Masa/Duvar]",
        keyPhrase: "The keys are IN my bag.  |  The laptop is ON the desk.",
        subPoints: [
          "Duvardaki bir tablo için de 'ON the wall' denir (yüzey teması).",
          "Tavandaki lamba için 'ON the ceiling' denir.",
          "Cepteki para için 'IN my pocket' denir (kapalı hacim)."
        ],
        rationale: "Türkçedeki tek bir '-de' ekinin İngilizcedeki uzamsal mantıkla ayrıştırılması gerekir."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Konum İlişkileri: Under, Behind, In Front of",
        content: "'Under' bir nesnenin altındaki konumu anlatır (under the bed). 'Behind' bir şeyin arkasındadır (behind the door). 'In front of' ise bir şeyin tam önündedir (in front of the building). 'In front of' üç kelimeden oluşan bir kalıptır.",
        formula: "UNDER [Altında]  |  BEHIND [Arkasında]  |  IN FRONT OF [Önünde]",
        keyPhrase: "The cat is under the chair.  |  The parking lot is in front of the hotel.",
        subPoints: [
          "'In front of' kalıbının sonundaki 'of' edatı asla unutulmamalıdır.",
          "'Behind' kelimesinin telaffuzu /bɪˈhaɪnd/ şeklindedir."
        ],
        rationale: "Fiziksel uzayda yön ve konum bildirme reflekslerini pekiştirmek esastır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Yanında (Next to) ve İki Şeyin Arasında (Between)",
        content: "'Next to' hemen yan yana, bitişik olmayı anlatır (next to the hospital). 'Between' ise iki açıkça belirtilen nesnenin veya kişinin arasında olmayı anlatır ve daima 'and' bağlacıyla kurulur: 'between A and B'.",
        formula: "NEXT TO + [Komşu Nesne]  |  BETWEEN [Nesne A] AND [Nesne B]",
        keyPhrase: "Sit next to me.  |  The bank is between the post office and the cafe.",
        subPoints: [
          "'Next to' kalıbındaki 'to' düşürülemez (*next the bank denmez).",
          "İkiden fazla şeyin arasında olmak için 'among' kelimesi kullanılır."
        ],
        rationale: "Şehir ve mekan tariflerinde komşuluk ve aradalık ifadeleri vazgeçilmezdir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Yüzey Varsa ON, İçindeyse IN",
        formula: "Yüzey Teması = ON (on the table, on the wall, on page 10)  |  Kapalı Alan = IN (in the box, in the room)",
        explanation: "Türkçe 'masada' derken masa yüzeyi kastedildiği için 'ON the table' denir. 'In the table' denirse masanın tahtasının içine oyulmuş bir delik anlaşılır!",
        exampleSnippet: "The phone is ON the desk, but the money is IN the drawer.",
        cautionNote: "Masadaki eşya için 'in the table' demeyin!"
      },
      {
        ruleTitle: "Between A AND B Kuralı",
        formula: "BETWEEN + [Öge 1] + AND + [Öge 2]",
        explanation: "'Between' edatı iki spesifik sınır arasında bulunmayı ifade eder ve iki ögeyi birbirine daima 'and' ile bağlar.",
        exampleSnippet: "The pharmacy is between the supermarket and the bakery.",
        tipNote: "İki ögeyi 'and' ile birleştirmeyi unutmayın."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "The laptop is in the table.",
        correctExample: "The laptop is on the table.",
        rootCause: "Türkçe '-de' ekini düşünerek yüzey teması olan yere 'in' koymak.",
        memoryTip: "Masa bir yüzeydir, üstüne basar: ON the table!"
      },
      {
        wrongExample: "He is waiting in front the bank.",
        correctExample: "He is waiting in front OF the bank.",
        rootCause: "'in front of' üçlü kalıbının sonundaki 'of' edatını yutmak.",
        memoryTip: "Kalıp üç parçalıdır: IN - FRONT - OF!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Ofiste Kayıp Dosyayı Bulma",
      description: "İki iş arkadaşının acil bir müşteri dosyasının ofisteki yerini tarif etmesi.",
      contextType: "workplace",
      dialogue: [
        { speaker: "Kemal", textEn: "Where is the contract folder? It isn't on my desk.", textTr: "Sözleşme dosyası nerede? Masamın üzerinde değil." },
        { speaker: "Jane", textEn: "Look inside the cabinet. It is in the blue file on the second shelf.", textTr: "Dolabın içine bak. İkinci raftaki mavi dosyanın içinde." },
        { speaker: "Kemal", textEn: "I found it! And where are the client's spare keys?", textTr: "Buldum! Peki müşterinin yedek anahtarları nerede?" },
        { speaker: "Jane", textEn: "They are in the drawer, under the yellow notebook.", textTr: "Çekmecenin içinde, sarı defterin altındalar." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe -de / -da Eki",
      conceptB: "İngilizce Uzamsal Edatlar (In, On, At)",
      keyDifference: "Türkçe tek bir ek (-de/-da) ile hem içindeliği (çantada), hem yüzeyi (masada), hem de mekanı (evde) anlatır. İngilizce ise uzamsal geometriye göre bunları 'in', 'on', 'at' olarak üçe ayırır.",
      exampleA: "Kitap masada (Yüzey) / Kitap çantada (İçinde)",
      exampleB: "The book is ON the desk / The book is IN the bag"
    },
    memoryHook: "Konum Şifresi: İçine girerse IN, üstüne değerse ON, aşağısındaysa UNDER, bitişiğindeyse NEXT TO!",
    examples: [
      {
        en: "The remote control is on the coffee table, next to the magazines.",
        tr: "Uzaktan kumanda sehpanın üzerinde, dergilerin yanındadır.",
        highlightedWords: ["on the coffee table", "next to"],
        grammarCategory: "Yüzey ve Bitişiklik",
        contextNote: "Ev ortamında eşya tarifi.",
        breakdownNote: "on + yüzey (the coffee table) + next to + komşu nesne (the magazines)."
      },
      {
        en: "Our car is parked in front of the building, between two trees.",
        tr: "Arabamız binanın önünde, iki ağacın arasında park halindedir.",
        highlightedWords: ["in front of", "between two trees"],
        grammarCategory: "Önünde ve Arasında",
        contextNote: "Otopark konumu tarifi.",
        breakdownNote: "in front of + bina + between + iki nesne."
      },
      {
        en: "Don't leave your luggage under the seat; place it in the overhead locker.",
        tr: "Bagajınızı koltuğun altında bırakmayın; baş üstü dolabına yerleştirin.",
        highlightedWords: ["under the seat", "in the overhead locker"],
        grammarCategory: "Altında ve İçinde",
        contextNote: "Uçakta kabin memuru uyarısı.",
        breakdownNote: "under + koltuk + in + baş üstü dolabı."
      }
    ],
    vocabulary: [
      { word: "Drawer", phonetic: "/drɔːr/", partOfSpeech: "noun", meaningTr: "Çekmece", exampleSentence: "The passport is in the top drawer." },
      { word: "Shelf", phonetic: "/ʃelf/", partOfSpeech: "noun", meaningTr: "Raf", exampleSentence: "The books are on the shelf." },
      { word: "Behind", phonetic: "/bɪˈhaɪnd/", partOfSpeech: "preposition", meaningTr: "Arkasında", exampleSentence: "The garden is behind the house." },
      { word: "Between", phonetic: "/bɪˈtwiːn/", partOfSpeech: "preposition", meaningTr: "İki şeyin arasında", exampleSentence: "I sit between Tom and Sarah." }
    ],
    quickCheck: {
      question: "'Gözlüklerim bilgisayarın yanında, masanın üzerindedir' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "My glasses are on the desk, next to the computer.",
        "My glasses are in the desk, next the computer.",
        "My glasses are under the desk, between the computer.",
        "My glasses is on the desk, next to computer."
      ],
      correctIndex: 0,
      explanation: "Masa yüzeyi için 'on the desk', bitişiklik için 'next to the computer' edatları ve çoğul 'glasses' ile 'are' kullanılır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun konum edatını yerleştirin:",
      sentence: "The cat is sleeping comfortably ___ the warm blanket on the sofa.",
      options: ["under", "between", "next", "in front"],
      correctAnswer: "under",
      hint: "Sıcak battaniyenin altında uyuduğunu anlatan edatı seçin.",
      explanation: "Bir nesnenin altında bulunmayı 'under' edatı ifade eder: 'under the warm blanket'."
    },
    sentenceBuilder: {
      promptTr: "Senin anahtarların oturma odasında masanın üzerindedir.",
      targetEn: "Your keys are on the table in the living room",
      availableWords: ["Your", "keys", "are", "on", "the", "table", "in", "living", "room", "is", "under", "at"],
      explanation: "Özne (Your keys) + to be (are) + konum 1 (on the table) + konum 2 (in the living room)."
    },
    summaryTakeaways: [
      "Kapalı hacimler ve odalar için 'IN', yüzeyle temas eden yerler için 'ON' edatı kullanılır.",
      "Bitişikliği anlatırken 'next TO', önünde olmayı anlatırken 'in front OF' tam kalıpları kullanılır.",
      "İki şeyin arasındalık daima 'between A and B' şeklinde ifade edilir."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 17: Renkler ve Temel Niteleme Sıfatları
  // -------------------------------------------------------------------------
  17: {
    skillType: 'vocabulary',
    concreteCompetency: "Temel renkleri (red, blue, green, yellow, black, white, grey, brown) ve niteleme sıfatlarını (big/small, new/old, fast/slow, cheap/expensive) isimden önce getirebilmek (sıfat tamlaması) veya 'To Be' fiilinden sonra yüklem olarak kullanabilmek ve İngilizcede sıfatların asla çoğul eki (-s) almadığını uygulamak.",
    whyItMatters: "Bir nesneyi tarif etmek, alışverişte aradığınız ürünü nitelemek ('Kırmızı bir ceket istiyorum', 'Bu ayakkabılar çok pahalı') veya seçenekler arasından ayrım yapmak sıfat bilgisiyle mümkündür.",
    linguisticLogic: "İngilizcede sıfatların iki temel söz dizimsel konumu vardır: 1) İsimden HEMEN ÖNCE gelerek niteleme yapar (Attributive): 'a red car', 'expensive watches'. 2) 'To Be' fiilinden HEMEN SONRA gelerek yüklem olur (Predicative): 'The car is red', 'The watches are expensive'. Hayati kural: İngilizce sıfatlar nötrdür; isim çoğul olsa bile sıfat ASLA çoğul eki (-s) almaz (*reds cars YANLIŞTIR!).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Sıfatın Yeri: İsimden Önce Gelme Kuralı",
        content: "Türkçede olduğu gibi İngilizcede de sıfat nitelediği ismin ÖNÜNE gelir. Eğer isim tekil sayılabilir bir isimse 'a/an' belirteci sıfatın en başına geçer: a car -> a RED car, an apple -> a GREEN apple.",
        formula: "A / AN + SIFAT + TEKİL İSİM  |  SIFAT + ÇOĞUL İSİM",
        keyPhrase: "a fast car  |  an expensive hotel  |  big houses",
        subPoints: [
          "'a' veya 'an' seçimi sıfatın ilk sesine göre belirlenir: a house -> AN old house ('old' sesliyle başladığı için 'an' oldu).",
          "Sıfat daima ismin hemen solundadır: *a car red KESİNLİKLE YANLIŞTIR."
        ],
        rationale: "İngilizce isim tamlaması dizilişi sol-modifikasyon (left-branching) prensibine dayanır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: To Be'den Sonra Kullanım (Yüklem Konumu)",
        content: "Sıfat tek başına bir cümlenin yüklemi olacaksa 'To Be' fiilinin sağına yerleşir. Bu durumda sıfatın arkasından bir isim gelmez ve başına 'a/an' konmaz.",
        formula: "Özne + am/is/are + SIFAT (a/an YOK, isim YOK)",
        keyPhrase: "The car is red.  |  These shoes are expensive.  |  I am happy.",
        subPoints: [
          "'The car is red' (Araba kırmızıdır) -> Sıfat tek başınadır, 'a' almaz.",
          "'It is a red car' (O kırmızı bir arabadır) -> Sıfattan sonra isim geldiği için 'a' alır."
        ],
        rationale: "Tek başına sıfat ile sıfat tamlaması arasındaki belirteç farkını oturtmak şarttır."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Altın Kural: Sıfatlar Asla Çoğul Eki Almaz!",
        content: "Fransızca veya İspanyolcada sıfatlar çoğul olurken, İngilizcede sıfatlar ASLA ama asla çoğul eki (-s) ALMAZ. İsim çoğul olsa dahi sıfat daima yalın kalır.",
        formula: "Çoğul İsim = Sıfata DOKUNMA! (expensive cars, NOT *expensives cars)",
        keyPhrase: "red cars (DOĞRU)  |  *reds cars (YANLIŞ!)",
        subPoints: [
          "blue pens (Mavi kalemler) -> 'blue' kelimesine asla -s eklenmez.",
          "young people (Genç insanlar) -> sıfat değişmez."
        ],
        rationale: "Gereksiz çoğul ekleme hatası Türk öğrencilerin sık düştüğü bir tuzaktır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Sıfatlara Asla -s Eklenmez!",
        formula: "new cars (DOĞRU)  |  *news cars (YANLIŞ!)",
        explanation: "İngilizcede çoğul eki (-s) sadece ve sadece İSİMLERE gelir. Sıfatlar değişmez ve cinsiyetsizdir.",
        exampleSnippet: "These small devices are very powerful.",
        cautionNote: "Sıfata asla çoğul 's' takısı takmayın!"
      },
      {
        ruleTitle: "a / an Seçimi Sıfata Göre Yapılır",
        formula: "a watch -> AN expensive watch  |  an umbrella -> A black umbrella",
        explanation: "Belirteç olarak 'a' mı 'an' mi geleceğine ismin kendisi değil, ismin HEMEN ÖNÜNDEKİ sıfatın ilk harfi karar verir.",
        exampleSnippet: "He drives an expensive German car.",
        tipNote: "Sıfat sesli harfle başlıyorsa 'an', sessizle başlıyorsa 'a' koyun."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "She bought a bag red yesterday.",
        correctExample: "She bought a red bag yesterday.",
        rootCause: "Sıfatı ismin arkasına koyma hatası.",
        memoryTip: "Sıfat önden gider: RED bag, BIG house!"
      },
      {
        wrongExample: "I like these blues shoes.",
        correctExample: "I like these blue shoes.",
        rootCause: "İsim çoğul olunca sıfata da çoğul eki takmak.",
        memoryTip: "Sıfatlar tek tiptir, asla -s almaz: BLUE shoes!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Mağazada Kıyafet ve Renk Seçimi",
      description: "Bir giyim mağazasında müşterinin satış danışmanına aradığı renk ve bedeni tarif etmesi.",
      contextType: "social",
      dialogue: [
        { speaker: "Customer", textEn: "Excuse me, I like this jacket, but it is too small. Have you got a large one?", textTr: "Affedersiniz, bu ceketi beğendim ama çok küçük. Büyüğü var mı?" },
        { speaker: "Shop Assistant", textEn: "Yes, we have a large size in black and in dark blue.", textTr: "Evet, siyah ve koyu mavi renkte büyük bedenimiz var." },
        { speaker: "Customer", textEn: "The dark blue jacket is very elegant. How much is it?", textTr: "Koyu mavi ceket çok şık. Ne kadar?" },
        { speaker: "Shop Assistant", textEn: "It is eighty pounds. It is a high-quality wool coat.", textTr: "Seksen sterlin. Yüksek kaliteli bir yün kaban." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "İsimden Önce Sıfat (Attributive)",
      conceptB: "Fiilden Sonra Sıfat (Predicative)",
      keyDifference: "İsimden önce gelirse sıfat tamlaması kurar ve tekilse 'a/an' alır ('a fast car'). 'To Be'den sonra gelirse tek başına yüklem olur ve 'a/an' almaz ('The car is fast').",
      exampleA: "It is a fast train. (a + sıfat + isim)",
      exampleB: "The train is fast. (isim + is + sıfat)"
    },
    memoryHook: "Sıfat Terazisi: Sıfat ismin önüne geçer (red car)! Asla çoğul eki almaz (red cars)! 'To Be'den sonra tek kalır (The car is red)!",
    examples: [
      {
        en: "Our company purchased fifteen new computers for the design studio.",
        tr: "Şirketimiz tasarım stüdyosu için on beş yeni bilgisayar satın aldı.",
        highlightedWords: ["fifteen new computers"],
        grammarCategory: "Sıfat Tamlaması Çoğul İsim",
        contextNote: "Sıfat çoğul ismin önünde yalın kalır.",
        breakdownNote: "Sayı (fifteen) + sıfat (new) + çoğul isim (computers)."
      },
      {
        en: "That luxury hotel is extremely expensive during the summer season.",
        tr: "O lüks otel yaz sezonu boyunca son derece pahalıdır.",
        highlightedWords: ["That luxury hotel", "is extremely expensive"],
        grammarCategory: "Yüklem Sıfatı",
        contextNote: "To Be fiilinden sonra sıfat kullanımı.",
        breakdownNote: "Özne (That luxury hotel) + is + zarf (extremely) + sıfat (expensive)."
      },
      {
        en: "She wears an elegant black dress for formal dinner receptions.",
        tr: "Resmi akşam yemeği davetleri için şık siyah bir elbise giyer.",
        highlightedWords: ["an elegant black dress"],
        grammarCategory: "İki Sıfatlı Tamlama",
        contextNote: "Peş peşe niteleme sıfatı ve renk.",
        breakdownNote: "an + sıfat 1 (elegant) + renk sıfatı (black) + tekil isim (dress)."
      }
    ],
    vocabulary: [
      { word: "Expensive", phonetic: "/ɪkˈspen.sɪv/", partOfSpeech: "adjective", meaningTr: "Pahalı", exampleSentence: "This smartphone is too expensive." },
      { word: "Cheap", phonetic: "/tʃiːp/", partOfSpeech: "adjective", meaningTr: "Ucuz, hesaplı", exampleSentence: "We found a cheap flight ticket." },
      { word: "Comfortable", phonetic: "/ˈkʌm.fə.tə.bəl/", partOfSpeech: "adjective", meaningTr: "Rahat, konforlu", exampleSentence: "This armchair is very comfortable." },
      { word: "Dark", phonetic: "/dɑːk/", partOfSpeech: "adjective", meaningTr: "Karanlık, koyu (renk)", exampleSentence: "He prefers dark blue suits." }
    ],
    quickCheck: {
      question: "'Onlar çok pahalı arabalar satın aldılar' cümlesinde 'pahalı arabalar' ifadesi nasıl çevrilmelidir?",
      options: [
        "expensive cars",
        "expensives cars",
        "cars expensives",
        "a expensive cars"
      ],
      correctIndex: 0,
      explanation: "İngilizcede sıfatlar asla çoğul eki (-s) almaz ve daima ismin önünde yer alır: 'expensive cars'."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun belirteç ve sıfat öbeğini yerleştirin:",
      sentence: "Sarah works in ___ modern office in the city centre.",
      options: ["a", "an", "the", "one"],
      correctAnswer: "a",
      hint: "'modern' sıfatı sessiz bir harfle (/m/) başlar.",
      explanation: "Sessiz sesle başlayan sıfat tamlamalarında 'a' kullanılır: 'a modern office'."
    },
    sentenceBuilder: {
      promptTr: "Bizim yeni arabamız çok hızlı ve son derece rahattır.",
      targetEn: "Our new car is very fast and extremely comfortable",
      availableWords: ["Our", "new", "car", "is", "very", "fast", "and", "extremely", "comfortable", "are", "cars", "a"],
      explanation: "Sıfat tamlaması özne (Our new car) + to be (is) + sıfat 1 (very fast) + bağlaç (and) + sıfat 2 (extremely comfortable)."
    },
    summaryTakeaways: [
      "İngilizcede sıfatlar niteledikleri ismin ÖNÜNE gelir (a red car, a big house).",
      "Sıfatlar çoğul isimlerle kullanılsa dahi ASLA çoğul eki (-s) almaz (expensive cars).",
      "'To Be'den sonra gelen sıfatlar tek başınadır ve önlerine 'a/an' almaz (The car is red)."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 18: Duygular ve Fiziksel Durumlar (Happy, Tired, Hungry)
  // -------------------------------------------------------------------------
  18: {
    skillType: 'vocabulary',
    concreteCompetency: "Fiziksel durumları (hungry, thirsty, cold, hot, tired, sleepy) ve duyguları (happy, sad, angry, nervous, bored) ifade ederken Türkçedeki 'sahip olmak' yanılgısından kaçınıp daima 'To Be' fiilini (I am cold, He is hungry) hatasız kullanabilmek.",
    whyItMatters: "Nasıl hissettiğinizi, acıktığınızı, üşüdüğünüzü veya yorulduğunuzu söylemek insani iletişimin ve refahın en temel ifadesidir.",
    linguisticLogic: "Türkçede 'Üşüdüm', 'Açım' veya 'Uykum var' derken farklı yapılar kullanılır. Fransızca veya İspanyolcada ise 'Açlığa sahibim' denir. Ancak İngilizcede bütün bu fiziksel ve duygusal durumlar birer SIFATTIR ve bu yüzden daima 'To Be (am/is/are)' fiiliyle ifade edilir: 'I am hungry' (Ben açım), 'I am cold' (Üşüyorum/Soğuk hissediyorum). Asla 'I have cold' veya 'I have hungry' DENMEZ!",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Fiziksel Durumlar: Neden 'HAVE' Değil de 'AM/IS/ARE'?",
        content: "İngilizcede açlık, susuzluk, üşüme veya sıcaklama birer mülkiyet değil, kişinin o anki varoluş halidir. Bu sebeple 'I have cold' denirse 'Nezle/soğuk algınlığım var' anlamına gelir! 'Üşüyorum' demek için sadece ve sadece 'I am cold' denir.",
        formula: "Özne + am/is/are + [hungry / thirsty / cold / hot / tired]",
        keyPhrase: "I am hungry. (Açım)  |  I am cold. (Üşüyorum)  |  She is tired. (O yorgun)",
        subPoints: [
          "'I am cold' = Üşüyorum / Soğuk hissediyorum.",
          "'I have a cold' = Grip/nezleyim (hastalık anlamındaki isimdir).",
          "'I am hot' = Sıcakladım / bunaldım."
        ],
        rationale: "Türkçeden ve diğer yabancı dillerden kaynaklanan en ölümcül kavram kargaşası buradadır."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Temel Duygular: Happy, Sad, Angry, Nervous",
        content: "Ruhsal durumları anlatırken de aynı formül geçerlidir: happy (mutlu), sad (üzgün), angry (kızgın), nervous (gergin/endişeli), excited (heyecanlı), bored (sıkılmış). Soru sorarken To Be başa geçer: 'Are you angry?' (Kızgın mısın?).",
        formula: "Özne + am/is/are + [Duygu Sıfatı]  |  Soru: Are you [Duygu Sıfatı] ?",
        keyPhrase: "Why are you nervous?  |  We are delighted to see you.  |  He is sad.",
        subPoints: [
          "Bored vs Boring: 'I am bored' (Ben sıkıldım - duygu); 'The film is boring' (Film sıkıcı - özellik).",
          "Duyguların nedenini açıklarken 'because' bağlacı kullanılır."
        ],
        rationale: "Duygu sıfatları sosyal empati ve diyalog derinliğini kurar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Derecelendirme Zarfları: Very, So, A bit",
        content: "Duygunun şiddetini belirtmek için sıfatın hemen önüne derece zarfları getirilir: 'very' (çok), 'so' (öylesine/çok), 'a bit / a little' (biraz): 'I am a bit tired' (Biraz yorgunum), 'She is so happy' (O öyle mutlu ki).",
        formula: "Özne + am/is/are + [very / so / a bit] + SIFAT",
        keyPhrase: "I am a bit hungry.  |  They are very tired after work.",
        subPoints: [
          "'a bit' hafifletici bir kibarlık katar: 'I am a bit busy right now.'",
          "'extremely' en üst düzey şiddeti belirtir: 'extremely exhausted' (aşırı tükenmiş)."
        ],
        rationale: "Zarflar anlatımı zenginleştirir ve duygusal nüansı netleştirir."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Hayati Ayrım: I am cold vs I have a cold",
        formula: "I am cold = Üşüyorum (Fiziksel durum)  |  I have a cold = Nezle/Gribim (Hastalık)",
        explanation: "Eğer birine 'I have cold' derseniz sizi hasta sanıp mendil veya ilaç uzatabilir. 'Üşüyorum, pencereyi kapat' demek için mutlaka 'I AM cold' demelisiniz.",
        exampleSnippet: "Please close the window, I am cold. (Üşüyorum)",
        cautionNote: "Üşürken sakın 'I have cold' demeyin!"
      },
      {
        ruleTitle: "Bored (Sıkılmış) vs Boring (Sıkıcı)",
        formula: "Kişinin hissi = BORED (-ed)  |  Durumun/Şeyin özelliği = BORING (-ing)",
        explanation: "'I am boring' derseniz 'Ben sıkıcı bir insanım' demiş olursunuz! 'Sıkıldım' demek için mutlaka 'I am bored' demelisiniz.",
        exampleSnippet: "I am bored because the lecture is boring.",
        tipNote: "Hissettiğiniz duygu için -ed bitişli sıfatı seçin."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "I have very hungry.",
        correctExample: "I am very hungry.",
        rootCause: "Açlığı sahip olunan bir şey sanarak 'have' fiili kullanmak.",
        memoryTip: "Açlık bir sıfattır, vücudun durumudur: I AM hungry!"
      },
      {
        wrongExample: "I am boring in this meeting.",
        correctExample: "I am bored in this meeting.",
        rootCause: "-ing ve -ed sıfatlarını karıştırarak kendine 'sıkıcı' demek.",
        memoryTip: "Canın sıkıldıysa: I am BORED!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Uzun Bir Uçuş Sonrası Durum Değerlendirmesi",
      description: "Londra'dan New York'a inen iki arkadaşın havaalanında fiziksel durumlarını paylaşması.",
      contextType: "travel",
      dialogue: [
        { speaker: "Elif", textEn: "Phew, that was an eight-hour flight. I am so tired!", textTr: "Pof, sekiz saatlik bir uçuştu. Çok yorgunum!" },
        { speaker: "Can", textEn: "Me too, and I am extremely thirsty. Let's buy some water.", textTr: "Ben de, ve aşırı susadım. Hadi biraz su alalım." },
        { speaker: "Elif", textEn: "Are you hungry as well?", textTr: "Aynı zamanda aç mısın?" },
        { speaker: "Can", textEn: "Not really, but I am very cold because the terminal air conditioning is strong.", textTr: "Pek değil, ama çok üşüyorum çünkü terminalin kliması çok güçlü." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe 'Uykum var / Açım'",
      conceptB: "İngilizce 'To Be + Sıfat'",
      keyDifference: "Türkçede 'uyku' isimdir ve 'var' ile kurulur ('Uykum var'). İngilizcede ise 'sleepy' bir sıfattır ve 'am/is/are' ile kurulur ('I am sleepy').",
      exampleA: "Uykum var. (İsim + var)",
      exampleB: "I am sleepy. (To Be + Sıfat)"
    },
    memoryHook: "Durum Kuralı: Nasıl hissediyorsan 'I AM' ile başla: I am hungry, I am cold, I am tired! Asla 'have' deme!",
    examples: [
      {
        en: "The children are very sleepy, so let's put them to bed early tonight.",
        tr: "Çocukların çok uykusu var, bu yüzden bu gece onları erken yatıralım.",
        highlightedWords: ["are very sleepy"],
        grammarCategory: "Fiziksel Durum Sıfatı",
        contextNote: "Aile ortamında uyku durumu.",
        breakdownNote: "Çoğul özne (The children) + are + zarf (very) + sıfat (sleepy)."
      },
      {
        en: "Why is Michael so angry this morning? - Because his train was cancelled.",
        tr: "Michael bu sabah neden bu kadar öfkeli? - Çünkü treni iptal edildi.",
        highlightedWords: ["is Michael so angry"],
        grammarCategory: "Duygu Durumu Sorusu",
        contextNote: "Bir başkasının duygusal tepkisini sorgulama.",
        breakdownNote: "Why + is + özne (Michael) + so + sıfat (angry)."
      },
      {
        en: "I am a bit nervous about the driving test, but my instructor is supportive.",
        tr: "Direksiyon sınavı konusunda biraz gerginim ama eğitmenim destekleyici.",
        highlightedWords: ["am a bit nervous"],
        grammarCategory: "Derecelendirilmiş Duygu",
        contextNote: "Sınav öncesi duygu paylaşımı.",
        breakdownNote: "I am + a bit + sıfat (nervous) + edat öbeği."
      }
    ],
    vocabulary: [
      { word: "Thirsty", phonetic: "/ˈθɜː.sti/", partOfSpeech: "adjective", meaningTr: "Susamış", exampleSentence: "Drink some water if you are thirsty." },
      { word: "Sleepy", phonetic: "/ˈsliː.pi/", partOfSpeech: "adjective", meaningTr: "Uykulu (uykusu gelmiş)", exampleSentence: "I feel sleepy after lunch." },
      { word: "Nervous", phonetic: "/ˈnɜː.vəs/", partOfSpeech: "adjective", meaningTr: "Gergin, heyecanlı/endişeli", exampleSentence: "She was nervous before the interview." },
      { word: "Relieved", phonetic: "/rɪˈliːvd/", partOfSpeech: "adjective", meaningTr: "Rahatlamış, içi ferahlamış", exampleSentence: "We are relieved to hear the good news." }
    ],
    quickCheck: {
      question: "İngilizcede 'Üşüyorum, lütfen pencereyi kapat' demek isteyen biri hangi cümleyi kurmalıdır?",
      options: [
        "I am cold, please close the window.",
        "I have cold, please close the window.",
        "I am coldness, please close the window.",
        "I make cold, please close the window."
      ],
      correctIndex: 0,
      explanation: "Fiziksel üşüme durumu 'To Be' fiili ile 'I am cold' şeklinde ifade edilir."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "We walked for three hours in the forest, so we ___ completely exhausted now.",
      options: ["are", "have", "do", "is"],
      correctAnswer: "are",
      hint: "'We' öznesi ile fiziksel tükenmişlik durumunu bağlayan fiil hangisidir?",
      explanation: "Çoğul özne 'We' ile fiziksel durum bildiren sıfat arasında 'are' kullanılır: 'we are completely exhausted'."
    },
    sentenceBuilder: {
      promptTr: "Biz çok açız ama restoranda hiç boş masa yok.",
      targetEn: "We are very hungry but there is no free table in the restaurant",
      availableWords: ["We", "are", "very", "hungry", "but", "there", "is", "no", "free", "table", "in", "restaurant", "have", "not"],
      explanation: "Duygu/Durum (We are very hungry) + bağlaç (but) + varlık olumsuzu (there is no free table in the restaurant)."
    },
    summaryTakeaways: [
      "Fiziksel durumlar (hungry, thirsty, cold, hot) İngilizcede 'have' ile DEĞİL, 'To Be (am/is/are)' ile söylenir.",
      "'I am cold' = Üşüyorum; 'I have a cold' = Gribim/Nezleyim demektir.",
      "Kendi hissiniz için '-ed' sıfatı (I am bored), durumun niteliği için '-ing' sıfatı (The film is boring) kullanılır."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 19: Hava Durumu ve Sıcaklık İfadeleri
  // -------------------------------------------------------------------------
  19: {
    skillType: 'vocabulary',
    concreteCompetency: "Hava durumunu sorma kalıplarını ('What is the weather like?' / 'How is the weather?'), hava tasvirinde 'IT' öznesini (It is sunny, It is rainy, It is cloudy, It is windy), anlık hava eylemlerini (It is raining, It is snowing) ve sıcaklık derecelerini ('It is 22 degrees Celsius') hatasız ifade edebilmek.",
    whyItMatters: "Hava durumu İngiliz kültüründe sohbet başlatmanın (small talk) bir numaralı konusudur. Günlük giyimden seyahat planına kadar her karar hava koşullarına göre alınır.",
    linguisticLogic: "İngilizcede hava durumunu anlatırken Türkçedeki gibi öznesiz 'Güneşli' veya 'Yağmur yağıyor' denilemez. Doğa olaylarında sahte/boş özne (dummy/empty subject) olan 'IT' kelimesi cümlenin başına zorunlu olarak gelir: 'It is sunny'. İki farklı kalıp vardır: 1) Durum bildiren sıfatlar: 'It is sunny / windy / cloudy'. 2) Anlık süregelen doğa olayları: 'It is raining / snowing' (fiil -ing alır). Hava durumu sormanın evrensel kalıbı ise 'What is the weather like?' sorusudur ('like' burada 'gibi' anlamındadır, sevmekle ilgisi yoktur!).",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Hava Durumu Sorma: 'What is the weather like?'",
        content: "Havayı sormanın en yaygın iki kalıbı vardır: 'What is the weather like?' (Hava nasıl? - en yaygın) veya 'How is the weather?'. 'What is the weather like in London today?' (Bugün Londra'da hava nasıl?).",
        formula: "What is the weather like in [Şehir / Ülke] ?  |  How is the weather?",
        keyPhrase: "What's the weather like today? - It is sunny and warm.",
        subPoints: [
          "'What ... like?' kalıbındaki 'like' edattır ve 'nasıl, ne gibi' anlamına gelir; 'sevmek' fiiliyle ilgisi yoktur.",
          "Cevaba daima 'It is' ile başlanır."
        ],
        rationale: "Küresel small talk diyaloglarının başlangıç sorusudur."
      },
      {
        stepNumber: 2,
        title: "2. Adım: 'It is + Sıfat' ile Hava Tasviri",
        content: "Hava durumunu sıfatlarla anlatırken formül: 'It is + [Sıfat]': It is sunny (güneşli), It is cloudy (bulutlu), It is windy (rüzgarlı), It is foggy (sisli), It is stormy (fırtınalı). Sıcaklıklar için: hot (sıcak), warm (ılık/güzel), cool (serin), cold (soğuk), freezing (dondurucu).",
        formula: "IT IS + [Hava Sıfatı] (+ and + [Sıcaklık Sıfatı])",
        keyPhrase: "It is cloudy and cool today.  |  It is freezing outside.",
        subPoints: [
          "Asla 'The weather is sunny' demek yanlış değildir ama günlük dilde 'It is sunny' çok daha doğaldır.",
          "'Freezing' sıfırın altındaki dondurucu havalar için kullanılır."
        ],
        rationale: "Hava sıfatları çevre tasvirinin temel kelime dağarcığını oluşturur."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Yağış Eylemleri (Raining / Snowing) ve Sıcaklık Derecesi",
        content: "Eğer tam şu an yağmur veya kar yağıyorsa eylem şimdiki zamanda (V-ing) kurulur: 'It is raining' (Yağmur yağıyor), 'It is snowing' (Kar yağıyor). Sıcaklığı söylerken: 'It is twenty-five degrees (Celsius)'.",
        formula: "It is raining (Yağmur yağıyor)  |  It is snowing (Kar yağıyor)  |  It is [Sayı] degrees",
        keyPhrase: "Take an umbrella, it is raining.  |  It is fifteen degrees in Istanbul.",
        subPoints: [
          "'It is rainy' (Hava yağmurlu - genel durum) vs 'It is raining' (Yağmur yağıyor - anlık eylem).",
          "Derece için 'degrees Celsius' denir; ABD'de Fahrenheit kullanılır."
        ],
        rationale: "Durum sıfatı ile anlık yağış eylemi arasındaki ayrım dilbilgisel kesinlik sağlar."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Hava Durumunda Zorunlu 'IT' Öznesi",
        formula: "IT is sunny (DOĞRU)  |  *Is sunny (YANLIŞ)  |  *Today is rain (YANLIŞ)",
        explanation: "İngilizcede hava, saat ve mesafe cümlelerinde eylemi yapan somut bir kişi olmadığı için 'dummy it' (sözde özne) kullanılır. Cümle mutlaka 'It is' ile başlamalıdır.",
        exampleSnippet: "It is very windy by the seaside today.",
        cautionNote: "Öznesiz olarak asla 'Is cold today' demeyin!"
      },
      {
        ruleTitle: "Rainy (Sıfat) vs Raining (Eylem)",
        formula: "It is RAINY = Hava yağmurlu  |  It is RAINING = Yağmur yağıyor",
        explanation: "'Rainy' günün genel özelliğidir (a rainy day). 'Raining' ise gökyüzünden damlaların düştüğü anlık eylemdir.",
        exampleSnippet: "London is often rainy, and it is raining right now.",
        tipNote: "Şu anda yağıyorsa '-ing' ekli hali seçin: It is raining."
      }
    ],
    commonMistakes: [
      {
        wrongExample: "What is the weather like? -> I like sunny weather.",
        correctExample: "What is the weather like? -> It is sunny.",
        rootCause: "Sorudaki 'like' edatını 'sevmek' fiili sanıp kendi zevkini anlatmak.",
        memoryTip: "'What is it like?' = Nasıl bir şey? Havayı tarif et!"
      },
      {
        wrongExample: "Is raining today in Ankara.",
        correctExample: "It is raining today in Ankara.",
        rootCause: "Türkçe 'Bugün Ankara'da yağmur yağıyor' derken özne kullanmama refleksini İngilizceye taşımak.",
        memoryTip: "Havadan bahsederken başa 'IT' koymayı unutma: IT is raining!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Sabah Dışarı Çıkmadan Önce Hava Durumu Konuşması",
      description: "Londra'da yaşayan ev arkadaşlarının sabah işe çıkmadan önce hava durumunu kontrol etmesi.",
      contextType: "daily",
      dialogue: [
        { speaker: "Mark", textEn: "Good morning! What is the weather like outside?", textTr: "Günaydın! Dışarıda hava nasıl?" },
        { speaker: "Ayşe", textEn: "It is very cloudy and cold. I think it is about eight degrees.", textTr: "Çok bulutlu ve soğuk. Sanırım yaklaşık sekiz derece." },
        { speaker: "Mark", textEn: "Is it raining right now?", textTr: "Şu anda yağmur yağıyor mu?" },
        { speaker: "Ayşe", textEn: "No, it isn't raining yet, but take an umbrella just in case.", textTr: "Hayır henüz yağmıyor, ama ne olur ne olmaz yanına bir şemsiye al." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "Türkçe 'Hava' Kelimesi Kullanımı",
      conceptB: "İngilizce 'It is' Yapısı",
      keyDifference: "Türkçede 'Hava çok güzel' veya 'Yağmur var' denir. İngilizcede 'The weather is good' denebilse de konuşma dilinin %90'ında doğrudan 'It is very nice' veya 'It is raining' denir.",
      exampleA: "Bugün hava rüzgarlı.",
      exampleB: "It is windy today."
    },
    memoryHook: "Hava Formülü: Sorarken 'WHAT IS THE WEATHER LIKE?', söylerken 'IT IS sunny / raining / 20 degrees'!",
    examples: [
      {
        en: "What is the weather like in Istanbul today? - It is bright and sunny.",
        tr: "Bugün İstanbul'da hava nasıl? - Pırıl pırıl ve güneşli.",
        highlightedWords: ["What is the weather like", "bright and sunny"],
        grammarCategory: "Hava Sorma ve Tasvir",
        contextNote: "Şehirlerarası hava durumu sohbeti.",
        breakdownNote: "Soru kalıbı + It is + sıfatlar (bright and sunny)."
      },
      {
        en: "It is snowing heavily in the mountains, so the ski resort is open.",
        tr: "Dağlarda yoğun şekilde kar yağıyor, bu yüzden kayak merkezi açık.",
        highlightedWords: ["It is snowing heavily"],
        grammarCategory: "Anlık Kar Yağışı",
        contextNote: "Kış tatili hava durumu.",
        breakdownNote: "It is snowing + zarf (heavily) + yer."
      },
      {
        en: "It is thirty-two degrees in Antalya today; it is extremely hot.",
        tr: "Bugün Antalya'da hava otuz iki derece; aşırı sıcak.",
        highlightedWords: ["thirty-two degrees", "extremely hot"],
        grammarCategory: "Sıcaklık ve Derece",
        contextNote: "Yaz sıcaklığı bildirimi.",
        breakdownNote: "It is + sayı + degrees + it is + zarf + sıfat (hot)."
      }
    ],
    vocabulary: [
      { word: "Sunny", phonetic: "/ˈsʌn.i/", partOfSpeech: "adjective", meaningTr: "Güneşli", exampleSentence: "It is a sunny morning." },
      { word: "Cloudy", phonetic: "/ˈklaʊ.di/", partOfSpeech: "adjective", meaningTr: "Bulutlu", exampleSentence: "The sky is completely cloudy." },
      { word: "Windy", phonetic: "/ˈwɪn.di/", partOfSpeech: "adjective", meaningTr: "Rüzgarlı", exampleSentence: "It is too windy for a boat trip." },
      { word: "Degree", phonetic: "/dɪˈɡriː/", partOfSpeech: "noun", meaningTr: "Derece (sıcaklık birimi)", exampleSentence: "The temperature is 18 degrees." }
    ],
    quickCheck: {
      question: "'Bugün hava nasıl?' sorusunun İngilizce karşılığı hangisidir?",
      options: [
        "What is the weather like today?",
        "How is liking the weather today?",
        "What does the weather like today?",
        "Which weather is today like?"
      ],
      correctIndex: 0,
      explanation: "Standart hava durumu sorusu 'What is the weather like...?' kalıbıdır."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun seçeneği yerleştirin:",
      sentence: "Don't go out without a coat; ___ freezing outside.",
      options: ["it is", "there is", "is", "weather is"],
      correctAnswer: "it is",
      hint: "Hava ve sıcaklık tasvirlerinde hangi özne-fiil çifti kullanılır?",
      explanation: "Hava ve sıcaklık bildiren cümleler 'it is' ile başlar: 'it is freezing outside'."
    },
    sentenceBuilder: {
      promptTr: "Bugün hava rüzgarlı ve soğuk ama yağmur yağmıyor.",
      targetEn: "It is windy and cold today but it is not raining",
      availableWords: ["It", "is", "windy", "and", "cold", "today", "but", "not", "raining", "there", "has", "rain"],
      explanation: "Durum (It is windy and cold today) + bağlaç (but) + olumsuz eylem (it is not raining)."
    },
    summaryTakeaways: [
      "Hava durumunu sormak için 'What is the weather like?' kalıbı kullanılır.",
      "Hava durumu anlatılırken cümle başına zorunlu 'IT IS' öznesi gelir (It is sunny, It is cold).",
      "Genel durum için sıfat (It is rainy), tam o anda yağan yağmur için eylem (It is raining) kullanılır."
    ]
  },

  // -------------------------------------------------------------------------
  // LESSON 20: A1 Modül 2 Entegrasyonu: Evim ve Odamı Tasvir Etme
  // -------------------------------------------------------------------------
  20: {
    skillType: 'speaking',
    concreteCompetency: "A1 Modül 2 boyunca öğrenilen tüm dilsel araçları (To Be durumları, There is / There are varlık bildirimleri, konum edatları, renkler ve niteleme sıfatları) birleştirerek bir evi, odayı ve mobilyaları akıcı, tutarlı ve eksiksiz bir paragrafla tasvir edebilmek.",
    whyItMatters: "Bu ders A1 seviyesinin ilk büyük sentez zirvesidir. İzole kuralları bilmek yetmez; bir evi kiralarken, bir arkadaşınıza evinizi gezdirirken veya oda arkadaşı ararken tüm bu yapıları tek bir doğal anlatımda harmanlayabilmelisiniz.",
    linguisticLogic: "Başarılı bir mekan tasviri pedagojik olarak 4 temel sütunun sentezidir: 1) Genel Tasvir (To Be + Sıfat): 'My flat is modern and bright.' 2) Mekandaki Varlıklar (There is / There are): 'There are two bedrooms and a spacious kitchen.' 3) Eşyaların Konumu (Konum Edatları): 'The sofa is in front of the window, next to the bookcase.' 4) Renk ve Niteleme Sıfatları: 'There is a comfortable grey armchair.'",
    stepBreakdown: [
      {
        stepNumber: 1,
        title: "1. Adım: Genel Mekan Girişi (To Be + Sıfatlar)",
        content: "Tasvire evinizin veya odanızın genel büyüklüğü, konumu ve atmosferiyle başlayın: 'I live in a cosy flat in Kadikoy. It is small but very comfortable.' (Kadıköy'de şirin bir dairede yaşıyorum. Küçük ama çok konforlu.)",
        formula: "My flat / room + is + [Büyüklük/Durum Sıfatı] + and + [Atmosfer Sıfatı]",
        keyPhrase: "My apartment is bright and spacious.  |  My bedroom is quiet.",
        subPoints: [
          "Sıfatları 'and' (ve) ya da 'but' (ama) ile bağlayın: 'small but modern'.",
          "Genel durum için daima tekil 'is' kullanılır."
        ],
        rationale: "Her mekan tasviri genelden özele doğru bir çerçeve kurarak başlar."
      },
      {
        stepNumber: 2,
        title: "2. Adım: Odaları ve Varlıkları Sayma (There is / There are)",
        content: "Evin bölümlerini tanıtırken tekiller için 'There is', çoğullar için 'There are' devreye girer: 'There are two bedrooms, a bathroom, and a large living room. There is also a small balcony.'",
        formula: "There is a [Tekil Oda]  |  There are [Sayı] + [Çoğul Odalar]",
        keyPhrase: "There are three rooms in my flat.  |  There is a modern kitchen.",
        subPoints: [
          "Ek bilgi eklerken 'also' (ayrıca) zarfını kullanın: 'There is also a balcony.'",
          "Tekil ve çoğulları birbirine 'and' ile bağlayın."
        ],
        rationale: "Varlık bildirme yapıları mekanın envanterini sunar."
      },
      {
        stepNumber: 3,
        title: "3. Adım: Eşya Yerleşimi ve Konumlandırma (Edatlar + Renkler)",
        content: "Odanın içine girip mobilyaları ve konumlarını niteleyin. Sıfatı ismin önüne, edatı da konumun önüne koyun: 'In the living room, there is a comfortable grey sofa. Next to the sofa, there is a wooden coffee table. On the table, there is a lamp.'",
        formula: "[Konum Edatı Öbeği], there is/are + [Sıfat + Renk + Eşya]",
        keyPhrase: "Next to the window, there is a wooden desk.  |  On the wall, there are colourful paintings.",
        subPoints: [
          "Cümleye konumla başlayıp virgül koyabilirsiniz: 'In my bedroom, there is a big bed.'",
          "Renk ve sıfatı birleştirin: 'a comfortable grey sofa'."
        ],
        rationale: "Uzamsal edatlar ve sıfatlar anlatıma görsel canlılık ve kesinlik kazandırır."
      }
    ],
    ruleCards: [
      {
        ruleTitle: "Entegrasyon Zinciri Formülü",
        formula: "Genel Giriş (is) -> Odalar (There are) -> Eşyalar & Konum (There is ... next to / on)",
        explanation: "Rastgele cümleler kurmak yerine bu üç adımlı hiyerarşiyi takip ettiğinizde konuşmanız akıcı ve profesyonel bir seviyeye yükselir.",
        exampleSnippet: "My flat is modern. There are two rooms. In the bedroom, there is a desk under the window.",
        tipNote: "Genelden özele doğru ilerleyin."
      },
      {
        ruleTitle: "Sıfat ve Renk Sıralaması",
        formula: "Görüş/Nitelik Sıfatı + Renk Sıfatı + İsim (comfortable grey sofa)",
        explanation: "Birden fazla sıfat kullanırken genel niteleme sıfatı (comfortable, big) rengin (grey, red) ÖNÜNDE yer alır.",
        exampleSnippet: "a beautiful white house (a white beautiful house YANLIŞTIR).",
        cautionNote: "Rengi ismin hemen yanına koyun!"
      }
    ],
    commonMistakes: [
      {
        wrongExample: "In my room has a big bed and two chair.",
        correctExample: "In my room, there is a big bed and two chairs.",
        rootCause: "'There is' yerine 'has' kullanmak ve 'chairs' kelimesinin çoğul ekini unutmak.",
        memoryTip: "Mekanda bir şey varsa: THERE IS / THERE ARE! İki sandalyeyse: CHAIRS!"
      },
      {
        wrongExample: "The wardrobe is next the bed.",
        correctExample: "The wardrobe is next TO the bed.",
        rootCause: "'next to' kalıbının 'to' edatını düşürmek.",
        memoryTip: "Next tek başına yetmez: NEXT TO!"
      }
    ],
    realWorldContext: {
      scenarioTitle: "Oda Arkadaşı Adayına Evi Gezdirme ve Tanıtma",
      description: "Londra'da kiralık bir daireye oda arkadaşı arayan bir öğrencinin evi gelen adaya gezdirmesi.",
      contextType: "social",
      dialogue: [
        { speaker: "Host", textEn: "Welcome! Come in. This is our flat. It is very warm and quiet.", textTr: "Hoş geldin! İçeri buyur. Burası bizim dairemiz. Çok sıcak ve sessizdir." },
        { speaker: "Guest", textEn: "It looks lovely! How many rooms are there?", textTr: "Çok sevimli görünüyor! Kaç oda var?" },
        { speaker: "Host", textEn: "There are two bedrooms, a shared bathroom and a big kitchen. Here is your room.", textTr: "İki yatak odası, ortak bir banyo ve büyük bir mutfak var. İşte senin odan." },
        { speaker: "Guest", textEn: "Wonderful! There is a study desk in front of the window, and a wardrobe next to the door.", textTr: "Harika! Pencerenin önünde bir çalışma masası ve kapının yanında bir gardırop var." }
      ]
    },
    contrastiveAnalysis: {
      conceptA: "İzole Cümle Kurma",
      conceptB: "Entegre Metin / Paragraf Kurma",
      keyDifference: "İzole kurallar tek tek soru çözer. Entegre konuşma ise To Be, There is/are, edatlar ve sıfatları bağlaçlarla (and, but, so, because) birbirine kenetleyerek tam bir söylem üretir.",
      exampleA: "It is big. There is a bed. The bed is blue.",
      exampleB: "It is a spacious room with a comfortable blue bed near the window."
    },
    memoryHook: "Ev Tasviri Piramidi: Tabanında 'My flat is cosy', ortasında 'There are rooms', zirvesinde 'The desk is under the window'!",
    examples: [
      {
        en: "My apartment is on the fourth floor; it is very bright and has a wonderful city view.",
        tr: "Dairem dördüncü kattadır; çok aydınlıktır ve harika bir şehir manzarası vardır.",
        highlightedWords: ["on the fourth floor", "very bright"],
        grammarCategory: "Mekan ve Durum Girişi",
        contextNote: "Evin genel özelliklerini özetleme.",
        breakdownNote: "Konum (on the fourth floor) + To Be + sıfat (very bright)."
      },
      {
        en: "In the living room, there is a large grey sofa and a flat-screen TV on the wall.",
        tr: "Oturma odasında büyük gri bir kanepe ve duvarda düz ekran bir televizyon vardır.",
        highlightedWords: ["there is a large grey sofa", "on the wall"],
        grammarCategory: "Varlık, Renk ve Konum Entegrasyonu",
        contextNote: "Salon mobilyalarını tasvir etme.",
        breakdownNote: "There is + sıfat ve renk (large grey sofa) + on the wall."
      },
      {
        en: "There aren't any noisy neighbours nearby, so our flat is exceptionally peaceful.",
        tr: "Yakınlarda hiç gürültücü komşu yok, bu yüzden dairemiz son derece huzurludur.",
        highlightedWords: ["There aren't any noisy neighbours", "exceptionally peaceful"],
        grammarCategory: "Olumsuz Varlık ve Sonuç",
        contextNote: "Çevre ve yaşam kalitesi tasviri.",
        breakdownNote: "There aren't any + çoğul isim + so + to be + sıfat."
      }
    ],
    vocabulary: [
      { word: "Spacious", phonetic: "/ˈspeɪ.ʃəs/", partOfSpeech: "adjective", meaningTr: "Ferah, geniş", exampleSentence: "We have a spacious living room." },
      { word: "Cosy", phonetic: "/ˈkəʊ.zi/", partOfSpeech: "adjective", meaningTr: "Sıcak, sevimli, samimi (mekan)", exampleSentence: "Her bedroom is small but cosy." },
      { word: "Wardrobe", phonetic: "/ˈwɔː.drəʊb/", partOfSpeech: "noun", meaningTr: "Gardırop, giysi dolabı", exampleSentence: "The wardrobe is next to the bed." },
      { word: "Neighbourhood", phonetic: "/ˈneɪ.bə.hʊd/", partOfSpeech: "noun", meaningTr: "Mahalle, çevre", exampleSentence: "It is a quiet and safe neighbourhood." }
    ],
    quickCheck: {
      question: "Bir odayı tasvir ederken 'Pencerenin önünde rahat bir siyah koltuk vardır' cümlesinin en doğru İngilizce karşılığı hangisidir?",
      options: [
        "In front of the window, there is a comfortable black armchair.",
        "In front of window, have a comfortable black armchair.",
        "There are a comfortable black armchair in front of window.",
        "There is a black comfortable armchair next the window."
      ],
      correctIndex: 0,
      explanation: "'In front of the window' konum bildiriminin ardından tekil varlık için 'there is a comfortable black armchair' dizilimi doğrudur."
    },
    exercise: {
      prompt: "Boş bırakılan yere en uygun entegrasyon ifadesini yerleştirin:",
      sentence: "My new apartment is very peaceful because ___ noisy traffic on our street.",
      options: ["there is no", "there are no", "has no", "isn't no"],
      correctAnswer: "there is no",
      hint: "'traffic' sayılamayan tekil bir isimdir ve 'huzurlu çünkü trafik yok' denmektedir.",
      explanation: "Sayılamayan isimlerde olumsuz varlık bildirmek için 'there is no' kullanılır: 'there is no noisy traffic'."
    },
    sentenceBuilder: {
      promptTr: "Bizim oturma odamızda pencerenin yanında büyük rahat bir kanepe vardır.",
      targetEn: "In our living room there is a big comfortable sofa next to the window",
      availableWords: ["In", "our", "living", "room", "there", "is", "a", "big", "comfortable", "sofa", "next", "to", "the", "window", "are", "have"],
      explanation: "Konum 1 (In our living room) + varlık (there is a big comfortable sofa) + konum 2 (next to the window)."
    },
    summaryTakeaways: [
      "Mekan tasviri hiyerarşisi: 1) Genel niteleme (is cosy), 2) Odalar (there are 3 rooms), 3) Eşya ve konum (there is a desk next to the window).",
      "Birden fazla sıfat kullanılırken niteleme sıfatı rengin önüne gelir (comfortable grey sofa).",
      "Varlık bildirimleri ve konum edatları bağlaçlarla (and, but, because) zengin bir paragrafa dönüştürülür."
    ]
  }
};
