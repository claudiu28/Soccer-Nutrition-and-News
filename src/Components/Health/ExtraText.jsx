import {Heading, ListItem, UnorderedList,Box, Text} from "@chakra-ui/react";

const ExtraText = () => {
    return (
        <Box p={5}>
            <Text mb={5}>
                Nutrition and sports performance are deeply interconnected, with proper nutrition playing a critical role in optimizing athletic ability and recovery. Athletes require a balanced diet rich in macronutrients like proteins, carbohydrates, and fats to fuel their bodies and support muscle repair. Carbohydrates are vital for providing the energy needed for high-intensity sports, while protein aids in muscle recovery and growth post-exercise. Healthy fats contribute to joint health and long-term energy, making them equally important. In addition, micronutrients such as vitamins and minerals help support immune function, reduce inflammation, and prevent fatigue during rigorous training sessions. Hydration is also crucial, as even mild dehydration can impair physical performance. Electrolytes are especially important during extended activity, helping to prevent cramps and maintain endurance. Consuming a nutrient-dense, well-timed meal before and after workouts ensures that athletes can train harder, recover faster, and maintain peak performance. Whether you are a casual runner or a professional athlete, nutrition is the foundation of athletic success, supporting endurance, strength, mental focus, and overall well-being.
            </Text>

            <Heading size="md" mb={3}>Meal Plans and Nutrition Guides</Heading>
            <UnorderedList mb={5}>
                <ListItem>7-Day Meal Plan for Endurance Athletes</ListItem>
                <ListItem>High-Protein Meals for Building Muscle</ListItem>
                <ListItem>Pre-Workout vs. Post-Workout Nutrition: What’s the Difference?</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Supplementation</Heading>
            <UnorderedList mb={5}>
                <ListItem>Are Protein Shakes Worth It? The Science Behind the Supplement</ListItem>
                <ListItem>Do Athletes Really Need Creatine?</ListItem>
                <ListItem>The Benefits and Risks of Taking BCAAs for Muscle Recovery</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Hydration and Electrolytes</Heading>
            <UnorderedList mb={5}>
                <ListItem>Why Hydration is Key for Athletic Performance</ListItem>
                <ListItem>Best Electrolyte Drinks for Long-Distance Runners</ListItem>
                <ListItem>How Dehydration Impacts Your Ability to Compete</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Special Diets</Heading>
            <UnorderedList mb={5}>
                <ListItem>How to Maintain a Vegan Diet as an Athlete</ListItem>
                <ListItem>Is Keto Good for Athletes? Pros and Cons of Low-Carb Diets in Sports</ListItem>
                <ListItem>Gluten-Free Diets for Athletes with Celiac Disease</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Weight Management</Heading>
            <UnorderedList mb={5}>
                <ListItem>How to Gain Weight Safely for Football Players</ListItem>
                <ListItem>Maintaining Lean Muscle Mass During the Off-Season</ListItem>
                <ListItem>Tips for Losing Weight Without Losing Strength</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Supplements and Vitamins</Heading>
            <UnorderedList mb={5}>
                <ListItem>Top 5 Vitamins Every Athlete Needs for Optimal Performance</ListItem>
                <ListItem>Is Collagen the Key to Healthier Joints for Athletes?</ListItem>
                <ListItem>Omega-3s: Why Every Athlete Should Incorporate Fish Oil into Their Diet</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Fitness and Exercise</Heading>
            <UnorderedList mb={5}>
                <ListItem>5 Strength-Training Exercises for Explosive Power</ListItem>
                <ListItem>HIIT vs. Steady-State Cardio: Which is Better for Athletes?</ListItem>
                <ListItem>Full-Body Workouts That Can Be Done at Home</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Cardio vs. Strength Training</Heading>
            <UnorderedList mb={5}>
                <ListItem>How to Balance Cardio and Strength Training for Maximum Gains</ListItem>
                <ListItem>The Role of Strength Training in Injury Prevention for Runners</ListItem>
                <ListItem>Does Lifting Weights Really Slow You Down? The Science Explained</ListItem>
            </UnorderedList>

            <Heading size="md" mb={3}>Yoga and Flexibility</Heading>
            <UnorderedList mb={5}>
                <ListItem>5 Yoga Poses to Improve Flexibility for Runners</ListItem>
                <ListItem>How Regular Stretching Can Improve Your Range of Motion</ListItem>
                <ListItem>The Benefits of Yoga for Professional Athletes</ListItem>
            </UnorderedList>
        </Box>
    );
}

export default ExtraText;