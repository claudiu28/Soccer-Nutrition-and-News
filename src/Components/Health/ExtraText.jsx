import {Heading, ListItem, UnorderedList, Box, Text, Grid} from "@chakra-ui/react";

const ExtraText = () => {
    return (
        <Box p={5}>
            <Text mb={4} p={4} textAlign="center" fontFamily="Merriweather, serif" lineHeight="1.8" fontWeight={600}>
                Nutrition and sports performance are deeply interconnected, with proper nutrition playing a critical
                role in optimizing athletic ability and recovery. Athletes require a balanced diet rich in
                macronutrients like proteins, carbohydrates, and fats to fuel their bodies and support muscle repair.
                Carbohydrates are vital for providing the energy needed for high-intensity sports, while protein aids in
                muscle recovery and growth post-exercise. Healthy fats contribute to joint health and long-term energy,
                making them equally important. In addition, micronutrients such as vitamins and minerals help support
                immune function, reduce inflammation, and prevent fatigue during rigorous training sessions. Hydration
                is also crucial, as even mild dehydration can impair physical performance. Electrolytes are especially
                important during extended activity, helping to prevent cramps and maintain endurance. Consuming a
                nutrient-dense, well-timed meal before and after workouts ensures that athletes can train harder,
                recover faster, and maintain peak performance. Whether you are a casual runner or a professional
                athlete, nutrition is the foundation of athletic success, supporting endurance, strength, mental focus,
                and overall well-being.
            </Text>

            <Box display="flex" justifyContent="center" alignItems="center" width="100%">
                <Grid templateColumns={{base: "1fr", md: "repeat(3, 1fr)"}} gap={6}>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Meal Plans and Nutrition Guides</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>7-Day Meal Plan for Endurance
                                Athletes</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>High-Protein Meals for Building
                                Muscle</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Pre-Workout vs. Post-Workout Nutrition:
                                What’s the Difference?</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Supplementation</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Are Protein Shakes Worth It? The Science
                                Behind the Supplement</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Do Athletes Really Need Creatine?</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>The Benefits and Risks of Taking BCAAs for
                                Muscle Recovery</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Hydration and Electrolytes</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Why Hydration is Key for Athletic
                                Performance</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Best Electrolyte Drinks for Long-Distance
                                Runners</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>How Dehydration Impacts Your Ability to
                                Compete</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Special Diets</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>How to Maintain a Vegan Diet as an
                                Athlete</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Is Keto Good for Athletes? Pros and Cons of
                                Low-Carb Diets in Sports</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Gluten-Free Diets for Athletes with Celiac
                                Disease</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Weight Management</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>How to Gain Weight Safely for Football
                                Players</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Maintaining Lean Muscle Mass During the
                                Off-Season</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Tips for Losing Weight Without Losing
                                Strength</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Supplements and Vitamins</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Top 5 Vitamins Every Athlete Needs for
                                Optimal Performance</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Is Collagen the Key to Healthier Joints for
                                Athletes?</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Omega-3s: Why Every Athlete Should
                                Incorporate Fish Oil into Their Diet</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Fitness and Exercise</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>5 Strength-Training Exercises for Explosive
                                Power</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>HIIT vs. Steady-State Cardio: Which is Better
                                for Athletes?</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Full-Body Workouts That Can Be Done at
                                Home</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Cardio vs. Strength Training</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>How to Balance Cardio and Strength Training
                                for Maximum Gains</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>The Role of Strength Training in Injury
                                Prevention for Runners</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>Does Lifting Weights Really Slow You Down?
                                The Science Explained</ListItem>
                        </UnorderedList>
                    </Box>
                    <Box>
                        <Heading size="md" mb={3} color="green.800">Yoga and Flexibility</Heading>
                        <UnorderedList mb={5}>
                            <ListItem sx={{"::marker": {color: "purple"}}}>5 Yoga Poses to Improve Flexibility for
                                Runners</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>How Regular Stretching Can Improve Your Range
                                of Motion</ListItem>
                            <ListItem sx={{"::marker": {color: "purple"}}}>The Benefits of Yoga for Professional
                                Athletes</ListItem>
                        </UnorderedList>
                    </Box>
                </Grid></Box>
        </Box>
    );
}

export default ExtraText;