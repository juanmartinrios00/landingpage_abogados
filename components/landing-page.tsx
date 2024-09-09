'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Scale, Briefcase, Users, Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin, ChevronLeft, ChevronRight, Menu, ArrowDown } from 'lucide-react'
import Image from 'next/image'

const areas = [
  { name: "Derecho Laboral", icon: <Briefcase className="h-6 w-6" />, description: "Protegemos tus derechos en el ámbito laboral." },
  { name: "Derecho Civil", icon: <Users className="h-6 w-6" />, description: "Resolvemos conflictos en relaciones personales y patrimoniales." },
  { name: "Derecho Comercial", icon: <Scale className="h-6 w-6" />, description: "Asesoramos en todas las etapas de tu negocio." },
  { name: "Derecho Penal", icon: <Scale className="h-6 w-6" />, description: "Defendemos tus derechos en procesos penales." },
]

const team = [
  { name: "Dr. Juan Pérez", role: "Abogado Laboral", image: "/placeholder.svg?height=200&width=200" },
  { name: "Dra. María Rodríguez", role: "Abogada Civil", image: "/placeholder.svg?height=200&width=200" },
  { name: "Dr. Carlos Gómez", role: "Abogado Comercial", image: "/placeholder.svg?height=200&width=200" },
  { name: "Dra. Laura Fernández", role: "Abogada Penal", image: "/placeholder.svg?height=200&width=200" },
  { name: "Dr. Alejandro Martínez", role: "Abogado Tributario", image: "/placeholder.svg?height=200&width=200" },
  { name: "Dra. Sofía Torres", role: "Abogada de Familia", image: "/placeholder.svg?height=200&width=200" },
]

const testimonials = [
  { 
    name: "Ana Martínez", 
    role: "Directora de RRHH",
    text: "Excelente asesoramiento en mi caso laboral. Muy profesionales y atentos.", 
    image: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100"
  },
  { 
    name: "Luis Sánchez", 
    role: "Empresario",
    text: "Resolvieron mi disputa comercial de manera eficiente y satisfactoria.", 
    image: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100"
  },
  { 
    name: "Elena Torres", 
    role: "Cliente Particular",
    text: "Su experiencia en derecho civil fue fundamental para ganar mi caso.", 
    image: "/placeholder.svg?height=100&width=100",
    logo: "/placeholder.svg?height=50&width=100"
  },
]

export function LandingPage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [currentTeamMember, setCurrentTeamMember] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const nextTeamMember = () => {
    setCurrentTeamMember((prev) => (prev + 1) % team.length)
  }

  const prevTeamMember = () => {
    setCurrentTeamMember((prev) => (prev - 1 + team.length) % team.length)
  }

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-100">
      <nav className="bg-blue-800 text-white py-4 px-6 fixed w-full z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scale className="h-8 w-8" />
          </div>
          <div className="hidden md:flex space-x-4">
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })}>Áreas de Práctica</Button>
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth' })}>Equipo</Button>
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' })}>Testimonios</Button>
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}>Contacto</Button>
            <Button onClick={() => document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth' })}>Consulta Gratuita</Button>
          </div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setMenuOpen(!menuOpen)}>
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {menuOpen && (
          <div className="mt-4 flex flex-col space-y-2 md:hidden">
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => { document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>Áreas de Práctica</Button>
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => { document.getElementById('equipo')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>Equipo</Button>
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => { document.getElementById('testimonios')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>Testimonios</Button>
            <Button variant="ghost" className="hover:bg-transparent hover:text-blue-300" onClick={() => { document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>Contacto</Button>
            <Button onClick={() => { document.getElementById('consulta')?.scrollIntoView({ behavior: 'smooth' }); setMenuOpen(false); }}>Consulta Gratuita</Button>
          </div>
        )}
      </nav>

      <main>
        <section className="h-screen flex flex-col justify-center items-center text-center px-4 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
          <h1 className="text-5xl font-extrabold mb-6">
            Justicia y Excelencia son las palabras que definen a nuestro equipo
          </h1>
          <p className="text-xl mb-16">
            Defendemos tus derechos con la pasión y dedicación que caracterizan a los Argentinos.
          </p>
          <div className="animate-bounce mt-8">
            <ArrowDown className="h-12 w-12 cursor-pointer" onClick={() => document.getElementById('areas')?.scrollIntoView({ behavior: 'smooth' })} />
          </div>
        </section>

        <section id="areas" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Nuestras Áreas de Práctica</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {areas.map((area, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="bg-blue-600 rounded-full p-6 mb-4">
                    <div className="text-white">
                      {area.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-blue-700">{area.name}</h3>
                  <p className="text-gray-600 text-center">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="equipo" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Nuestro Equipo</h2>
            <div className="relative">
              <Button variant="outline" className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10" onClick={prevTeamMember}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="text-center px-12">
                <Image
                  src={team[currentTeamMember].image}
                  alt={team[currentTeamMember].name}
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-700">{team[currentTeamMember].name}</h3>
                <p className="text-gray-600">{team[currentTeamMember].role}</p>
              </div>
              <Button variant="outline" className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10" onClick={nextTeamMember}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        <section id="testimonios" className="py-16 bg-blue-800 text-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 text-center">Lo que nuestros clientes dicen sobre nosotros</h2>
            <div className="relative">
              <Button variant="ghost" className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-blue-700" onClick={prevTestimonial}>
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <div className="text-center px-12">
                <p className="text-lg mb-4">"{testimonials[currentTestimonial].text}"</p>
                <div className="flex items-center justify-center">
                  <Image
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
                    <p className="text-blue-300">{testimonials[currentTestimonial].role}</p>
                  </div>
                </div>
              </div>
              <Button variant="ghost" className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 text-white hover:bg-blue-700" onClick={nextTestimonial}>
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </section>

        <section id="consulta" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Consulta Interactiva</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-blue-100 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-blue-800">Descubre Tu Camino Legal</h3>
                <p className="mb-6 text-gray-700">Responde a estas preguntas para obtener una guía personalizada sobre cómo podemos ayudarte:</p>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="legal-area" className="text-blue-800">¿En qué área legal necesitas ayuda?</Label>
                    <select id="legal-area" className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <option>Derecho Laboral</option>
                      <option>Derecho Civil</option>
                      <option>Derecho Comercial</option>
                      <option>Derecho Penal</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="urgency" className="text-blue-800">¿Cuál es la urgencia de tu caso?</Label>
                    <input type="range" id="urgency" min="1" max="5" className="w-full mt-1" />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Baja</span>
                      <span>Media</span>
                      <span>Alta</span>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="description" className="text-blue-800">Describe brevemente tu situación:</Label>
                    <Textarea id="description" placeholder="Escribe aquí..." className="w-full mt-1 p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">Obtener Asesoramiento Personalizado</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contacto" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Contáctanos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white p-6">
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Label htmlFor="name">Nombre</Label>
                      <Input id="name" placeholder="Tu nombre" />
                    </div>
                    <div>
                      <Label htmlFor="email">Correo Electrónico</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" />
                    </div>
                    <div>
                      <Label htmlFor="message">Mensaje</Label>
                      <Textarea id="message" placeholder="Describe brevemente tu caso" />
                    </div>
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white transform transition duration-300 hover:scale-105">
                      Enviar Consulta
                    </Button>
                  </form>
                </CardContent>
              </Card>
              <Card className="bg-white p-6">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-4 text-blue-700">Información de Contacto</h3>
                  <div className="space-y-2">
                    <p className="flex items-center"><MapPin className="mr-2 h-5 w-5 text-blue-600" /> Av. de Mayo 760, CABA</p>
                    <p className="flex items-center"><Phone className="mr-2 h-5 w-5 text-blue-600" /> +54 11 4321-8765</p>
                    <p className="flex items-center"><Mail className="mr-2 h-5 w-5 text-blue-600" /> info@estudiojuridicoporte.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-800 text-white py-8 px-4">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Estudio Jurídico Porteño</h3>
            <p>Defendiendo tus derechos en Buenos Aires desde 1995.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#areas" className="hover:text-blue-300 transition-colors">Áreas de Práctica</a></li>
              <li><a href="#equipo" className="hover:text-blue-300 transition-colors">Equipo</a></li>
              <li><a href="#testimonios" className="hover:text-blue-300 transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="hover:text-blue-300 transition-colors">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-blue-300 transition-colors"><Facebook /></a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors"><Instagram /></a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors"><Twitter /></a>
              <a href="#" className="text-white hover:text-blue-300 transition-colors"><Linkedin /></a>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p>&copy; 2023 Estudio Jurídico Porteño. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}