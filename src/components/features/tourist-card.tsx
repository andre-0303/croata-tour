"use client";

// src/components/features/tourist-card.tsx

import { useState } from "react";
import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { MapModal } from "../ui/map-modal";

interface TouristCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
  mapUrl: string;
}

export function TouristCard({
  title,
  description,
  image,
  category,
  mapUrl,
}: TouristCardProps) {
  const [isMapOpen, setIsMapOpen] = useState(false);

  return (
    <>
      <Card>
        <div className="relative">
          <CardImage src={image} alt={title} />

          {category && (
            <div className="absolute top-3 left-3">
              <Badge variant="accent">{category}</Badge>
            </div>
          )}
        </div>

        <CardContent>
          <CardTitle>{title}</CardTitle>

          <CardDescription>{description}</CardDescription>

          <div className="flex flex-row gap-2">
            <Button
              className="w-full"
              size="sm"
              variant="primary"
              href="https://croata.ce.gov.br/pontoturistico.php"
            >
              Ver mais
            </Button>
            <Button
              className="w-full"
              size="sm"
              variant="outline"
              onClick={() => setIsMapOpen(true)}
            >
              Ver no mapa
            </Button>
          </div>
        </CardContent>
      </Card>

      <MapModal
        mapUrl={mapUrl}
        title={title}
        isOpen={isMapOpen}
        onClose={() => setIsMapOpen(false)}
      />
    </>
  );
}
