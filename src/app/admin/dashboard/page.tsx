'use client'
import TabbedSection from '@/components/admin/TabbedSection';
import { CustomInput } from '@/components/admin/UI/CustomInput';
import { CustomTextarea } from '@/components/admin/UI/CustomTextarea';
import { LandingContent } from '@/types/translations';
import { useEffect, useState } from 'react';
import { AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const defaultForm: LandingContent = {
  heroTitle: { en: '', ar: '' },
  heroSubtitle: { en: '', ar: '' },
  services: [''],
  plans: [{
    title: '',
    price: 0,
    description: '',
    features: [],
    included: [],
    isPopular: false,
    tiers: []
  }],
};

export default function Dashboard() {
  const [form, setForm] = useState<LandingContent>(defaultForm);

  useEffect(() => {
    fetch('/api/landing-content')
      .then((res) => res.json())
      .then((data: LandingContent) => setForm(data));
  }, []);

const update = async () => {
  try {
    await fetch('/api/landing-content', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    toast.success('✅ All saved correctly');
  } catch (error) {
    console.error(error); // 👈 helps during debugging
    toast.error('❌ Something went wrong');
  }
};


  const tabs = [
    {
      label: 'Hero Content',
      content: (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomInput
              placeholder="Title (EN)"
              value={form.heroTitle.en}
              onChange={(e) => setForm({ ...form, heroTitle: { ...form.heroTitle, en: e.target.value } })}
            />
            <CustomInput
              placeholder="العنوان (AR)"
              value={form.heroTitle.ar}
              onChange={(e) => setForm({ ...form, heroTitle: { ...form.heroTitle, ar: e.target.value } })}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomInput
              placeholder="Subtitle (EN)"
              value={form.heroSubtitle.en}
              onChange={(e) => setForm({ ...form, heroSubtitle: { ...form.heroSubtitle, en: e.target.value } })}
            />
            <CustomInput
              placeholder="الوصف (AR)"
              value={form.heroSubtitle.ar}
              onChange={(e) => setForm({ ...form, heroSubtitle: { ...form.heroSubtitle, ar: e.target.value } })}
            />
          </div>
        </div>
      ),
    },
    {
      label: 'Services',
      content: (
        <div className="space-y-2">
          {form.services?.map((srv, i) => (
            <CustomInput
              key={i}
              placeholder={`الخدمة ${i + 1}`}
              value={srv}
              onChange={(e) => {
                const updated = [...form.services];
                updated[i] = e.target.value;
                setForm({ ...form, services: updated });
              }}
            />
          ))}
        </div>
      ),
    },
{
  label: 'Plans',
  content: (
    <div className="space-y-6">
      {form.plans?.map((plan, i) => (
        <div
          key={i}
          className="border border-gray-300 p-6 rounded-xl shadow-md bg-white space-y-4 relative"
        >
       {form.plans.length > 1 && i !== 0 && (
  <div
    className="absolute top-2 right-2 text-sm text-red-500 cursor-pointer hover:underline"
    onClick={() => {
      const updated = [...form.plans];
      updated.splice(i, 1);
      setForm({ ...form, plans: updated });
    }}
  >
    Remove
  </div>
)}



          <h3 className="text-xl font-bold text-mainColor">Plan #{i + 1}</h3>

          {/* Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomInput
              placeholder="Plan Title (EN)"
              value={plan.title?.en || ''}
              onChange={(e) => {
                const updated = [...form.plans];
                updated[i].title.en = e.target.value;
                setForm({ ...form, plans: updated });
              }}
            />
            <CustomInput
              placeholder="عنوان الباقة (AR)"
              value={plan.title?.ar || ''}
              onChange={(e) => {
                const updated = [...form.plans];
                updated[i].title.ar = e.target.value;
                setForm({ ...form, plans: updated });
              }}
            />
          </div>

          {/* Price */}
          <CustomInput
            type="number"
            placeholder="Price"
            value={plan.price}
            onChange={(e) => {
              const updated = [...form.plans];
              updated[i].price = +e.target.value;
              setForm({ ...form, plans: updated });
            }}
          />

          {/* Description */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomTextarea
              placeholder="Description (EN)"
              value={plan.description?.en || ''}
              onChange={(e) => {
                const updated = [...form.plans];
                updated[i].description.en = e.target.value;
                setForm({ ...form, plans: updated });
              }}
            />
            <CustomTextarea
              placeholder="الوصف (AR)"
              value={plan.description?.ar || ''}
              onChange={(e) => {
                const updated = [...form.plans];
                updated[i].description.ar = e.target.value;
                setForm({ ...form, plans: updated });
              }}
            />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <CustomTextarea
              placeholder="Features (EN) — one per line"
              value={plan.features?.map(f => f.en).join('\n') || ''}
              onChange={(e) => {
                const updated = [...form.plans];
                const featuresAr = plan.features?.map(f => f.ar) || [];
                updated[i].features = e.target.value
                  .split('\n')
                  .map((en, idx) => ({ en, ar: featuresAr[idx] || '' }));
                setForm({ ...form, plans: updated });
              }}
            />
            <CustomTextarea
              placeholder="Features (AR) — بنفس الترتيب"
              value={plan.features?.map(f => f.ar).join('\n') || ''}
              onChange={(e) => {
                const updated = [...form.plans];
                const featuresEn = plan.features?.map(f => f.en) || [];
                updated[i].features = e.target.value
                  .split('\n')
                  .map((ar, idx) => ({ en: featuresEn[idx] || '', ar }));
                setForm({ ...form, plans: updated });
              }}
            />
          </div>

    
<ul className="space-y-2 text-sm text-gray-800">
  {plan.features.map((feature, idx) => (
    <li key={idx} className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => {
          const updated = [...form.plans];
          updated[i].included[idx] = !updated[i].included[idx];
          setForm({ ...form, plans: updated });
        }}
        className="text-lg"
      >
        {plan.included[idx] ? (
          <AiOutlineCheck className="text-green-600" />
        ) : (
          <AiOutlineClose className="text-red-500" />
        )}
      </button>

      <span>
        {typeof feature === "string"
          ? feature
          : `${feature.en} / ${feature.ar}`}
      </span>
    </li>
  ))}
</ul>


          {/* Popular Toggle */}
          <div className="flex items-center gap-2 pt-2">
            <label className="text-sm">هل مميز؟</label>
            <input
              type="checkbox"
              checked={plan.isPopular}
              onChange={(e) => {
                const updated = [...form.plans];
                updated[i].isPopular = e.target.checked;
                setForm({ ...form, plans: updated });
              }}
            />
          </div>
        </div>
      ))}

      {/* Add New Plan Button */}
      <div className="pt-4 flex justify-end">
        <button
          onClick={() => {
            setForm({
              ...form,
              plans: [
                ...form.plans,
                {
                  title: { en: '', ar: '' },
                  price: 0,
                  description: { en: '', ar: '' },
                  features: [],
                  included: [],
                  isPopular: false,
                  tiers: [],
                },
              ],
            });
          }}
          className="px-6 py-2 bg-mainColor 
          text-white rounded-md hover:bg-orange-600 transition"
        >
          + Add New Plan
        </button>
      </div>
    </div>
  )
}


  ];

  return (
    <div className="max-w-4xl mx-auto py-10 space-y-6">
      <h1 className="text-2xl font-bold mb-4">
        Dashboard admin
        
      
      </h1>
      <TabbedSection tabs={tabs} />
      <button
        onClick={update}
        className="bg-mainColor text-white px-6 py-2 rounded mt-6"
      >
      Save changes
      </button>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
