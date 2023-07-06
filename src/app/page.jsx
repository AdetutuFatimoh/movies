import Movies from "./components/Movies";
const movies = [
    {
      
      name: 'Father Stu',
      year: '2023',
      director: 'Barry Levinson',
      synopsis: 'Father Stu is an upcoming drama film directed by Barry Levinson. It tells the true story of Father Stuart Long, a former boxer who becomes a priest and inspires those around him with his faith and perseverance.',
      image: '/images/fatherstu.jpg',
    },
    {
      name: 'Acrimony',
      year: '2018',
      director: 'Tyler Perry',
      synopsis: 'Acrimony is a psychological thriller film directed by Tyler Perry. It follows the tumultuous relationship between a faithful wife and her husband, who betrays her trust, leading to a series of vengeful actions.',
      image: '/images/acrimony.jpg',
    },
    {
      name: 'King Richard',
      year: '2021',
      director: 'Reinaldo Marcus Green',
      synopsis: 'King Richard is a biographical drama film directed by Reinaldo Marcus Green. It portrays the inspiring journey of Richard Williams, the father of tennis superstars Venus and Serena Williams, and his unwavering determination to make his daughters succeed.',
      image: '/images/kr.jpg',
    },
    {
      name: 'Inside Out',
      year: '2015',
      director: 'Pete Docter',
      synopsis: 'Inside Out is an animated adventure film directed by Pete Docter. It takes viewers on an emotional journey inside the mind of a young girl named Riley, personifying her emotions as characters who navigate her life changes.',
      image: '/images/insideout.jpeg',
    },
    {
      name: 'Anikulapo',
      year: '2022',
      director: 'Kunle Afolayan',
      synopsis: 'Anikulapo is a Nigerian historical drama film directed by Kunle Afolayan. Set during the colonial era, it portrays the life and struggles of Fela Kuti, a renowned musician and activist, as he fights against oppression and champions his unique music style.',
      image: '/images/anikulapo.jpg',
    },
    {
      name: 'Shanty Town',
      year: '2023',
      director: 'Chika Anadu',
      synopsis: 'Shanty Town is a drama film directed by Chika Anadu. It delves into the lives of individuals living in a sprawling urban slum, exploring themes of resilience, community, and the pursuit of dreams amidst challenging circumstances.',
      image: '/images/shantytown.jpg',
    },
  ];
  
export default function page() {
    
  return (
    <div>
    <Movies list= {movies}/>
    </div>
  )
}
