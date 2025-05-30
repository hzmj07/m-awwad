"use client";
import React, { useState } from "react";

export default function About() {
  const [lang, setLang] = useState("ar");

  const descriptions = {
    tr: `Ben bir fotoğrafçı değilim. Elimde profesyonel bir ekipman, cebimde sertifikalar yok belki… Ama gözümde bir bakış var: hayatı olduğu gibi, en sade hâliyle yakalayan bir bakış.
Güzelliği aramıyorum, çünkü o zaten var. Doğanın suskun bir anında, sokakta yürüyen birinin gölgesinde, batmakta olan bir güneşin son ışığında…
Ben sadece o anları durduruyorum.
Bu sayfa, gördüklerimin değil; hissettiklerimin izidir.
Ve eğer sen de baktığında bir şeyler hissediyorsan , işte orada buluşuyoruz.`,
    ar: `
لستُ مصوّراً محترفاً، ولا أملك شهادات أو معدات باهظة.
لكنّي أملك شيئاً لا يُشترى… عين ترى الجمال في التفاصيل التي يعبرها الناس دون أن يلتفتوا.
أُحب أن أجمّد اللحظة، أن أحتفظ بها كما شعرتُ بها، لا كما رآها الجميع.
الضوء حين يلامس ورقة شجر، ظلّ يمرّ على وجه، غروبٌ يتسلّل بين الأغصان... كلها مشاهد عابرة، لكنها تُحدّث القلب إن أُتقنّا الإصغاء.
هذه الصفحة ليست معرضاً لصوري فقط، بل مرآة لروحي، وانعكاس لما شعرتُ به في لحظات الصمت بيني وبين الطبيعة.
إن شعرتَ بشيءٍ عند النظر... فاعلم أننا التقينا هناك، دون
`,
  };

  return (
    <div className="relative min-h-screen pt-32 pb-20 px-6">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1920&q=80"
          alt="Sokak Fotoğrafçılığı"
          className="w-full h-full object-cover object-center bg-white opacity-40"
        />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-light mb-12 text-black text-center">
          About Me
        </h1>
        {/* Dil Select List */}
        <div className="flex justify-center mb-10">
         {/* <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-lg bg-white text-black focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="tr">Türkçe</option>
            <option value="ar">العربية</option>
          </select>*/}
        </div>
        <div className="space-y-8 text-gray-900 text-2xl leading-relaxed text-start">
            <div dir="rtl">{descriptions.ar}</div>
            <div dir="ltr">{descriptions.tr}</div>
        </div>
      </div>
    </div>
  );
}