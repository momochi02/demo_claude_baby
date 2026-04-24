export const defaultRecipes = [
  {
    id: 'r1',
    name: 'Cháo gà',
    category: 'soup',
    emoji: '🍗',
    ageRange: '3-6',
    ingredients: ['Gạo 50g', 'Ức gà 30g', 'Cà rốt 10g', 'Hành'],
    nutritionPer100g: { calories: 80, protein: 8, carbs: 10, fat: 2 },
    instructions: 'Nấu cháo với gà và cà rốt xắt nhỏ'
  },
  {
    id: 'r2',
    name: 'Sữa chua trái cây',
    category: 'dessert',
    emoji: '🍓',
    ageRange: '3-6',
    ingredients: ['Sữa chua 100g', 'Dâu tây 30g', 'Mật ong 5g'],
    nutritionPer100g: { calories: 90, protein: 4, carbs: 15, fat: 2 },
    instructions: 'Trộn sữa chua với trái cây xắt nhỏ'
  },
  {
    id: 'r3',
    name: 'Cơm rang trứng',
    category: 'main',
    emoji: '🍳',
    ageRange: '3-6',
    ingredients: ['Cơm 100g', 'Trứng 1 quả', 'Dầu ăn 5g', 'Hành'],
    nutritionPer100g: { calories: 150, protein: 6, carbs: 22, fat: 5 },
    instructions: 'Đảo trứng rồi trộn với cơm'
  },
  {
    id: 'r4',
    name: 'Rau xanh hấp',
    category: 'vegetable',
    emoji: '🥦',
    ageRange: '3-6',
    ingredients: ['Bông cải 50g', 'Cà rốt 20g', 'Dầu olive 3g'],
    nutritionPer100g: { calories: 25, protein: 2, carbs: 4, fat: 0.5 },
    instructions: 'Hấp hoặc luộc rau cùng cà rốt'
  },
  {
    id: 'r5',
    name: 'Nước cam',
    category: 'drink',
    emoji: '🍊',
    ageRange: '3-6',
    ingredients: ['Cam 1 quả', 'Nước 50ml'],
    nutritionPer100g: { calories: 45, protein: 0.5, carbs: 10, fat: 0 },
    instructions: 'Vắt cam và pha với nước'
  },
  {
    id: 'r6',
    name: 'Bánh quy sữa',
    category: 'snack',
    emoji: '🍪',
    ageRange: '3-6',
    ingredients: ['Bột 50g', 'Sữa 30ml', 'Trứng 1/2', 'Đường 10g'],
    nutritionPer100g: { calories: 200, protein: 5, carbs: 30, fat: 7 },
    instructions: 'Trộn bột và nướng ở 180°C'
  }
]

export const foodCategories = [
  { id: 'soup', name: 'Súp/Cháo', emoji: '🍲' },
  { id: 'main', name: 'Món chính', emoji: '🍜' },
  { id: 'vegetable', name: 'Rau', emoji: '🥗' },
  { id: 'fruit', name: 'Trái cây', emoji: '🍎' },
  { id: 'drink', name: 'Đồ uống', emoji: '🥛' },
  { id: 'dessert', name: 'Tráng miệng', emoji: '🍰' },
  { id: 'snack', name: 'Snack', emoji: '🍪' }
]