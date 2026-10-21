export const salon = {
  name: "MAISON BLUSH",
  tagline: "Your Beauty, Beautifully Defined.",
  email: "hello@example.com",
  phone: "+1 (000) 000-0000",
  whatsapp: "", // Add an international-format number before enabling WhatsApp.
  address: "Sample address · replace before launch",
  hours: ["Mon – Fri · 9:00 am – 7:00 pm", "Saturday · 9:00 am – 5:00 pm", "Sunday · By appointment"],
  instagram: "",
};

export const services = [
  { title: "Hair Styling & Blowouts", description: "Effortless styles, polished finishes, and looks for every occasion.", image: "photo-1560869713-7d0a29430803", alt: "A stylist shaping a polished hair look", number: "01" },
  { title: "Hair Colour & Balayage", description: "Dimensional colour and personalised shades designed around your style.", image: "photo-1522337360788-8b13dee7a37e", alt: "Beauty editorial with dimensional, glossy hair", number: "02" },
  { title: "Haircuts & Treatments", description: "Thoughtful cuts and nourishing treatments for a refreshed look.", image: "photo-1487412720507-e7ab37603c6f", alt: "Portrait with softly styled hair", number: "03" },
  { title: "Skin & Facial Rituals", description: "Relaxing facial experiences tailored to individual skin-care needs.", image: "photo-1570172619644-dfd03ed5d881", alt: "A calm facial treatment in a studio", number: "04" },
  { title: "Manicure & Nail Art", description: "Refined nail care, elegant finishes, and creative details.", image: "photo-1604654894610-df63bc536371", alt: "Elegant manicure with a neutral finish", number: "05" },
  { title: "Bridal & Occasion Glam", description: "Special-occasion beauty styling for memorable moments.", image: "photo-1519741497674-611481863552", alt: "An elegant wedding-day beauty moment", number: "06" },
];

export const gallery = [
  { image: "photo-1522337360788-8b13dee7a37e", alt: "Glossy brunette hair in soft studio light", label: "The colour edit" },
  { image: "photo-1604654894610-df63bc536371", alt: "Detail of a refined neutral manicure", label: "A little detail" },
  { image: "photo-1560869713-7d0a29430803", alt: "A stylist creating a soft, polished style", label: "In the studio" },
  { image: "photo-1570172619644-dfd03ed5d881", alt: "A quiet moment during a facial ritual", label: "Slow beauty" },
  { image: "photo-1519741497674-611481863552", alt: "An editorial bridal beauty scene", label: "The occasion edit" },
  { image: "photo-1487412720507-e7ab37603c6f", alt: "Beauty portrait with naturally styled hair", label: "A fresh perspective" },
];

export const imageUrl = (id: string, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=82`;
