## DrinksDB 饮品数据库


### Features

- [x] React Routes 路由

- [x] Error Page 自定义错误页面

- [x] Home Page：主页
  - [x] search form: type the text and search what we get in database 搜索
  - [x] a list of drinks, each drink will be respresent by the card 卡片式列表
  
- [x] SingleDrinkPage 单个饮品详情页

- [x] useCallback优化多次渲染的函数

  > 将fetchDrinks函数（从API根据关键词拉取数据）进行缓存，判断每次searchTerm这个依赖项是否改变，然后决定是否渲染

效果预览：

![search page](https://s2.loli.net/2024/10/15/blqRyAdwKeMjvsf.png)



![detail page](https://s2.loli.net/2024/10/15/rtKGTuvC8RfXVxH.png)



![error page](https://s2.loli.net/2024/10/15/1PcWLNtVE589ZUa.png)

### API

提供开放API的网页：https://www.thecocktaildb.com/api.php

用到的接口：

Search cocktail by name
www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita


Lookup full cocktail details by id
www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007



类似接口：[The Meal DB](https://www.themealdb.com/api.php) 

