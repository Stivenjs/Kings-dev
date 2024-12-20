"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { CustomAlert } from "../shared/custom-alert";
import PulsatingButton from "../ui/pulsating-button";

interface FormModalProps {
  title: string;
  buttonLabel: string;
  showIcon?: boolean;
  buttonClassName?: string;
}

export function FormModal({
  title,
  buttonLabel,
  showIcon = true,
  buttonClassName = "group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-full font-medium text-white overflow-hidden",
}: FormModalProps) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    message: "",
    type: "success" as "success" | "error",
    isVisible: false,
  });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const target = event.target as HTMLFormElement;

    const formData = {
      name: (target.elements.namedItem("name") as HTMLInputElement).value,
      email: (target.elements.namedItem("email") as HTMLInputElement).value,
      date: (target.elements.namedItem("date") as HTMLInputElement).value,
      time: (target.elements.namedItem("time") as HTMLInputElement).value,
      phone: (target.elements.namedItem("cellphone") as HTMLInputElement).value,
      platform: (target.elements.namedItem("platform") as HTMLSelectElement)
        .value,
      description: (
        target.elements.namedItem("description") as HTMLTextAreaElement
      ).value,
    };
    setLoading(true);
    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setAlertInfo({
          message: "Cita agendada con exito: " + result.message,
          type: "success",
          isVisible: true,
        });
      } else {
        setAlertInfo({
          message:
            "Error al enviar la cita, intenta de nuevo: " + result.message,
          type: "error",
          isVisible: true,
        });
      }
    } catch (error) {
      console.error("Error al enviar el correo:", error);
      setAlertInfo({
        message: "Hubo un problema al enviar el correo.",
        type: "error",
        isVisible: true,
      });
    }
    setLoading(false);
    setOpen(false);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <PulsatingButton className={buttonClassName}>
            <span className="relative flex items-center justify-center gap-2">
              {buttonLabel}
              {showIcon && (
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              )}
            </span>
          </PulsatingButton>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] bg-white border-0 rounded-lg shadow-2xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-gray-800 text-center">
              {title}
            </DialogTitle>
          </DialogHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-700 font-medium">
                  Nombre
                </Label>
                <Input
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 font-medium">
                  Correo
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="cellphone"
                  className="text-gray-700 font-medium"
                >
                  Numero de teléfono
                </Label>
                <Input
                  id="cellphone"
                  type="tel"
                  className="bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <div className="flex space-x-4">
                <div className="space-y-2 flex-1">
                  <Label htmlFor="date" className="text-gray-700 font-medium">
                    Fecha
                  </Label>
                  <Input
                    id="date"
                    type="date"
                    className="bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
                <div className="space-y-2 flex-1">
                  <Label htmlFor="time" className="text-gray-700 font-medium">
                    Hora
                  </Label>
                  <Input
                    id="time"
                    type="time"
                    className="bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="platform" className="text-gray-700 font-medium">
                  Plataforma de Reunión
                </Label>
                <Select name="platform" required>
                  <SelectTrigger className="bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300">
                    <SelectValue placeholder="Selecciona una plataforma" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="meet">Google Meet</SelectItem>
                    <SelectItem value="teams">Microsoft Teams</SelectItem>
                    <SelectItem value="discord">Discord</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="description"
                  className="text-gray-700 font-medium"
                >
                  Descripción del Proyecto
                </Label>
                <Textarea
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 min-h-[100px]"
                  placeholder="Describe brevemente tu proyecto..."
                  required
                />
              </div>
              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white py-3 rounded-lg font-medium "
              >
                {loading ? "Enviando..." : "Enviar"}
              </Button>
            </form>
          </motion.div>
        </DialogContent>
      </Dialog>
      <CustomAlert
        message={alertInfo.message}
        type={alertInfo.type}
        isVisible={alertInfo.isVisible}
        onClose={() => setAlertInfo((prev) => ({ ...prev, isVisible: false }))}
      />
    </>
  );
}
