({
	block: 'template-page',
	title: 'Отзывы',
	content: [
		{
			block: 'content',
			content: [
				{
					block : 'template-breadcrumbs',
					links: [
						{
							url: '#',
							content: 'Главная'
						},
						{
							url: '#',
							content: 'Отзывы'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Отзывы'
				},
				{
					block: 'reviews-item',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'reviews-card',
									content: [
										{
											elem : 'headings',
											content : [
												{
													elem: 'thumb',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	tag: 'img',
																	attrs: { src: 'img/tmp/reviews/1.jpg' },
																}
															]
														}

													]
												},
												{
													elem: 'date',
													content: '7 августа 2012'
												},
												{
													elem: 'title',
													content: 'Лаура-Архангельск'
												},
												{
													elem: 'name',
													content: [
														{
															tag: 'strong',
															content: 'Маркетолог ',
														},
														{
															tag: '',
															content: 'Никка Милонова',
														}
													]
												}
											]
										},
										{
											elem : 'info',
											content : 'Самый первый складной армейский нож в мире - мать всех швейцарских складных ножей, Германия, 1880 Этот складной нож был произведен в Германии в 1880 году фирмой Holler & Co специально для одного из нью-йоркских магазинов. Он появился на 11 лет раньше швейцарского армейского ножа. «Матерь ножей» обладает внушительными размерами – почти 9 сантиметров в ширину и 22 сантиметра в длину.В «матери ножей» есть два клинка, несколько типов ножниц, штопор, две пилы, крючок для застегивания пуговиц, скальпель, приспособление для обрезки сигар, перьевая ручка, механический карандаш, зеркальце, опасная бритва, вилка, столовый нож и даже револьвер, а также многое другое. Все эти приспособления прячутся в рукоятке из черепашьего панциря.'
										},
										{
											elem: 'back',
											content: [
												{
													block: 'back-button',
													tag: 'a',
													attrs: { href: '#' },
													content: '← назад'
												}
											]
										}
									]
								},
							]
						}
					]
				}
			]
		}
	]
})