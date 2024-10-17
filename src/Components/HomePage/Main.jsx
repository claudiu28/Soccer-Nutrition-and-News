import worldCup from "../../assets/images/jpg/FIFA World Cup trophy.jpg";
import nbaFinal from "../../assets/images/jpg/nba_finals-preview.jpg";
import olimpics from "../../assets/images/avif/olimpics.avif";
import news_imag from "../../assets/images/webp/NewsDescription.webp"
import nutrition from "../../assets/images/webp/nutrtion.webp"
const Main = () => {
    return (
        <main>
            <article>
                <section>
                    <h1>Sports</h1>
                    <p>Sport refers to any physical activity that involves skill, competition, and is often governed by
                        rules or customs. It typically requires physical exertion and is undertaken for enjoyment,
                        fitness, or competitive purposes. Sports can be individual or team-based and are practiced by
                        amateurs and professionals alike.</p>
                    <button>See more</button>
                    <div>
                        <img src={olimpics} alt = "olimpics"/>
                        <h1>Olympic Games (Summer & Winter)</h1>
                        <p>The largest and most prestigious multi-sport event in the world. Held every four years, it
                            brings together thousands of athletes from almost every country to compete in numerous
                            disciplines.</p>
                        <h3>Notable Sports: Athletics, Swimming, Gymnastics (Summer); Skiing, Ice Hockey (Winter).</h3>
                    </div>
                    <div>
                        <img src={worldCup} alt="World Cup"/>
                        <h1>FIFA World Cup:</h1>
                        <p>The biggest football (soccer) tournament in the world, held every four years, featuring the
                            best national teams competing for the title of world champion.</p>
                        <h3>Notable Nations: Brazil, Germany, Argentina, France.</h3>
                    </div>
                    <div>
                        <img src={nbaFinal} alt="NBA Finals"/>
                        <h1>
                            NBA Finals:
                        </h1>
                        <p>The championship series of the National Basketball Association (NBA), where the best teams from the Eastern and Western conferences face off in a best-of-seven series.</p>
                        <h3>Notable Teams: Los Angeles Lakers, Chicago Bulls, Golden State Warriors.</h3>
                    </div>
                </section>
                <section>
                    <h1>News</h1>
                    <p>
                        1.High Demand for Protein and Recovery Products: The sports nutrition market continues to be driven by a high demand for protein supplements, particularly among performance athletes. Gen Z are the most frequent users of protein shakes and bars, focusing on recovery and muscle growth. Plant-based proteins, such as pea and soy, are growing in popularity due to environmental and dietary concerns.
                    </p>
                    <p>
                        2.AI in Sports Nutrition: AI is playing a bigger role in personalizing nutrition. Companies are using AI to create tailored nutrition plans based on individual genetics and lifestyle. However, AI-generated plans still face challenges, as they can sometimes be misleading or incomplete
                    </p>
                    <img src = {news_imag} alt = "news"/>
                </section>
                <section>
                    <h1>Nutrition</h1>
                    <img src = {nutrition} alt = "Nutrition"/>
                    <p>
                        Plant-Based Diets: Plant-based eating is continuing to grow in popularity due to its health
                        benefits and positive environmental impact. More consumers are adopting egalitarian or vegan
                        diets, and studies show potential benefits such as reduced LDL cholesterol and weight loss.
                        However, those transitioning to a plant-based diet should ensure they’re getting essential
                        nutrients like vitamin B12, iron, and omega-3s.
                    </p>
                    <p>
                        Gut Health and the Gut-Brain Axis: Research is increasingly focused on the connection between
                        gut health and brain function. The gut-brain axis, where gut bacteria influence mood by
                        producing neurotransmitters like serotonin, is an area of interest.
                        Consuming probiotic fiber from foods like bananas, garlic, and oats helps support healthy gut bacteria.
                    </p>
                    <p>
                        Drinks that offer more than just basic nutrition, such as probiotic-infused drinks and electrolyte solutions, are trending.
                        These beverages claim to boost energy, mental focus, and gut health.
                        However, it is essential to monitor the sugar content in these drinks to avoid unwanted calories.
                    </p>
                </section>
            </article>
        </main>
    );
}

export default Main;