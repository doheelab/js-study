Table admin_users[headercolor: #27ae60] {
  id int [pk]
  email_address varchar
  name varchar
  approved tinyint
  department_id int [ref: > department.id]
  sidedish_num int [note:'추천 반찬 수']
  dessert_num int [note:'추천 디저트 수']
  target_calories int [note: '추천 칼로리']
  meal_price int [note: '추천 식단가']
}

Table special_meal_days[headercolor: #27ae60] {
  admin_user_id int [pk, ref: > admin_users.id]
  day tinyint [pk, note:'요일']
}

Table special_meal_dates[headercolor: #27ae60] {
  admin_user_id int [pk, ref: > admin_users.id]
  date date [pk, note:'일자']
}

Table recommended_menu_lists[headercolor: #542d24] {
  id int [pk]
  admin_user_id int [ref: > admin_users.id]
  eating_date date [note: '배식일']
  bld char(1) [note: '아침, 점심, 저녁 구분']
  version tinyint [note: '버전']
}

Table recommended_menu_list_food_junctions[headercolor: #542d24] {
  recommended_menu_list_id int [pk, ref: > recommended_menu_lists.id]
  food_id int [pk, note: 'food의 id 혹은 admin_food의 id']
  food_origin varchar [pk, note: 'food_id의 출처']
  serving_amount float [note: '배식량']
  version int [note: '버전']
}

Table modified_ingredients[headercolor: #542d24] {
  recommended_menu_list_id int [pk, ref: > recommended_menu_lists.id]
  food_id int [pk, note: 'food의 id 혹은 admin_food의 id']
  ingredient_id float [pk, ref: > Ingredient.id]
  food_origin varchar [pk, note: 'food_id의 출처']
  amount float [note: '변경된 재료량']
}


Table admin_food[headercolor: #d3a780] {
  id int [pk]
  admin_user_id int [ref: > admin_users.id]
  food_name varchar [note: '메뉴명']
  food_main_category_id int [ref: > FoodMainCategories.id]
  sub_main_category_id int [ref: > FoodSubCategories.id]
  serving_amount float [note: '배식량']
}

Table admin_food_ingredient_junctions[headercolor: #d3a780] {
  admin_food_id int [pk, ref: > admin_food.id]
  ingredient_id int [pk, ref: > Ingredient.id]
  amount float [note: '재료량']
}