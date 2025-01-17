import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { type PoodleInfo } from '@/types';

const poodles: PoodleInfo[] = [
  {
    name: 'Babi',
    age: 2,
    color: 'Brown',
    description: 'Sweet and gentle, Babi loves cuddles and playing fetch.'
  },
  {
    name: 'Abon',
    age: 3,
    color: 'Black',
    description: 'Energetic and playful, Abon is always ready for an adventure.'
  }
];

export function PoodlesSection() {
  return (
    <div className="container py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Our Poodles</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {poodles.map((poodle, index) => (
          <motion.div
            key={poodle.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{poodle.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><span className="font-semibold">Age:</span> {poodle.age} years</p>
                  <p><span className="font-semibold">Color:</span> {poodle.color}</p>
                  <p className="text-gray-500 dark:text-gray-400">{poodle.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}