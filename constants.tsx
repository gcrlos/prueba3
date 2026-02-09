
import React from 'react';
import { 
  Hammer, 
  Wrench, 
  Zap, 
  Droplets, 
  Paintbrush, 
  Trash2, 
  Ruler, 
  ShieldCheck, 
  Truck, 
  Wallet, 
  Users,
  MapPin,
  Phone,
  MessageCircle
} from 'lucide-react';
import { Category, Benefit } from './types';

export const BUSINESS_INFO = {
  name: 'Ferretería QyR',
  location: 'Mazuko, Madre de Dios',
  phone: '987654123',
  whatsapp: '51987654123',
  whatsappUrl: 'https://wa.me/51987654123',
  callUrl: 'tel:+51987654123',
};

export const CATEGORIES: Category[] = [
  {
    id: 'tools',
    title: 'Herramientas',
    description: 'Manuales y eléctricas: martillos, taladros y más.',
    icon: <Hammer className="w-8 h-8" />,
  },
  {
    id: 'general',
    title: 'Ferretería General',
    description: 'Tornillos, clavos, bisagras y cerraduras resistentes.',
    icon: <Wrench className="w-8 h-8" />,
  },
  {
    id: 'electrical',
    title: 'Material Eléctrico',
    description: 'Cables, focos y extensiones para toda instalación.',
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 'plumbing',
    title: 'Plomería',
    description: 'Tuberías y mangueras de alta calidad y durabilidad.',
    icon: <Droplets className="w-8 h-8" />,
  },
  {
    id: 'painting',
    title: 'Pinturas y Adhesivos',
    description: 'Variedad de colores y pegamentos industriales.',
    icon: <Paintbrush className="w-8 h-8" />,
  },
  {
    id: 'cleaning',
    title: 'Limpieza',
    description: 'Productos especializados para obra y hogar.',
    icon: <Trash2 className="w-8 h-8" />,
  },
  {
    id: 'safety',
    title: 'Medición y Seguridad',
    description: 'Flexómetros, escuadras, linternas y EPP.',
    icon: <Ruler className="w-8 h-8" />,
  },
];

export const BENEFITS: Benefit[] = [
  {
    id: 'prices',
    title: 'Precios Accesibles',
    description: 'Los mejores precios de Mazuko para tu bolsillo.',
    icon: <Wallet className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 'stock',
    title: 'Stock Inmediato',
    description: 'No esperes. Tenemos lo que necesitas ahora mismo.',
    icon: <Truck className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 'payment',
    title: 'Pagos Flexibles',
    description: 'Aceptamos Yape, Plin y efectivo con total seguridad.',
    icon: <ShieldCheck className="w-10 h-10 text-yellow-500" />,
  },
  {
    id: 'service',
    title: 'Atención Personal',
    description: 'Asesoría experta para todos tus proyectos.',
    icon: <Users className="w-10 h-10 text-yellow-500" />,
  },
];
