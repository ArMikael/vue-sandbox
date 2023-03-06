import type { BoardGame } from '@/types/types';
import { BoardGameSaleStatus } from '@/types/enums';

export const BoardGameMock: BoardGame = {
  artists: ['Jan Lipiński'],
  coverImage: 'horseless-carriage.jpg',
  description: [
    'This year, we want the best, or nothing at all. We don\'t want tradition. We want to live in the present, and the only history that is worth a tinker\'s damn is the history we make today." The famous founder is standing in front of his team giving a motivational speech. "You all know our first customer was a lunatic, and the second had a death wish. So they bought our brakeless bangers. So there were a few accidents. But the only mistake is the one from which we learn nothing. This year, customers demand safety. Of course, active safety features include rapid acceleration for safe overtaking! I know it will be hard to add the new motorblock section to the factory, but before you say you cannot do something, try it! To every engineer, every planner, every mechanic, and every salesperson in this great company I say: If I can dream it, you can do it!',
    'Horseless Carriage is a game about the dawn of the automobile, a time when cars were invented, and no one quite knew yet what this new contraption would look like and what features would be essential. Early cars sometimes used levers or pedals to steer and a wheel to accelerate. Brakes were not always seen as essential, but sometimes an outside spot to take along an onboard mechanic was. This early, super innovative period occurs in the development of many new product categories. Players are cast as aspiring industrialists trying to find out what features the public will value when buying these new, expensive, and utterly unfamiliar horseless carriages.'
  ],
  designers: ['Jeroen Doumen', 'Joris Wiersinga'],
  id: '350205',
  images: [],
  publisher: 'Splotter Spellen',
  publishedAt: '2023',
  saleStatus: BoardGameSaleStatus.Available,
  slogan: 'Aspiring industrialists build and sell new, expensive, utterly unfamiliar carriages',
  title: 'Horseless Carriage',
};

export const BoardGameMock2: BoardGame = {
  artists: ["Ian O'Toole"],
  coverImage: 'weather-machine.jpg',
  description: [
    'Natural disasters will soon be a thing of the past!” proclaimed Professor Sêni Lativ, Project Chief of Meteorological Manipulation at Lightning Technologies. Tests of his new invention, the Weather Machine, showed positive results. Visions of quelling floods, subduing cyclones, and ending droughts made him smile.',
    'In Weather Machine, you are scientists on Prof. Lativ’s team, tampering with local weather: adjusting rainfall for farms, maintaining wind and clear skies for ecological energy sources, and tweaking the temperature for resorts and sporting events. The prototype is quite effective so far; however, a pattern has emerged, revealing a worrying side effect: Each use of the Weather Machine also alters the conditions elsewhere on the planet — a “butterfly effect”',
    '"We must build a new prototype,” he announces as the agents shoot him sidelong glances; “…but this time we’re going to get it right.” The agents silently give a single, crisp nod of confirmation. “The government is funding this, and we will succeed.” As Prof. Lativ explains the plan, the need to secure suppliers for sufficient bots and chemicals is clear. In addition to the materials, time is of the essence; you must be focused and efficient to have any hope of reining this growing global terror, Earth’s atmosphere before conditions are too harsh for Homo sapiens and other species.',
  ],
  designers: ['Vital Lacerda'],
  id: '237179',
  images: [],
  publisher: 'Eagle-Gryphon Games',
  publishedAt: '2022',
  saleStatus: BoardGameSaleStatus.Available,
  slogan: 'Leverage research and lab experience to address extreme weather facing the world.',
  title: 'Weather Machine',
};
