import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FaPaw, FaHeart, FaMedal, FaHome } from 'react-icons/fa';

export function FeaturesSection() {
  const features = [
    {
      icon: FaPaw,
      title: 'Pure Breed',
      description: 'All our poodles come from champion bloodlines'
    },
    {
      icon: FaHeart,
      title: 'Loving Companions',
      description: 'Known for their affectionate and loyal nature'
    },
    {
      icon: FaMedal,
      title: 'Health Tested',
      description: 'Comprehensive health screenings for all our dogs'
    },
    {
      icon: FaHome,
      title: 'Family Raised',
      description: 'Raised in a loving home environment'
    }
  ];

  return (
    <div className="container py-20">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary" />
              <CardTitle className="mt-4">{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
