// src/components/features/tourist-card.tsx

import {
  Card,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

interface TouristCardProps {
  title: string;
  description: string;
  image: string;
  category?: string;
}

export function TouristCard({
  title,
  description,
  image,
  category,
}: TouristCardProps) {
  return (
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

        <Button
          className="w-full"
          size="sm"
          variant="primary"
          href="https://croata.ce.gov.br/pontoturistico.php"
        >
          Ver mais
        </Button>
      </CardContent>
    </Card>
  );
}
