({
	block: 'template-page',
	title: 'Отзывы',
	content: [
		{
			block: 'content',
			content: [
				{
					block: 'breadcrumbs',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'list',
									content: [
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Главная'
												},
											]
										},
										{
											elem: 'item',
											content: [
												{
													tag: 'a',
													elem: 'link',
													attrs: { href: '#' },
													content: 'Отзывы'
												},
											]
										}
									]
								}
							]
						}
					]
				},
				{
					block: 'page-title',
					mods: { 'underline': true },
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem : 'text',
									content : 'Отзывы'
								}
							]
						}
					]
				},
				{
					block: 'reviews',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'reviews-list',
									content: [
										{
											block: 'reviews-list-item',
											content: [
												{
													elem: 'text',
													content: [
														{
															elem: 'cite',
															cls: 'js-dotted',
															content: 'Еще никто не оставлял отзыв об этой компании и мы не знаем, работает она хорошо или плохо. Может быть вы расскажете свое мнение о ней? Еще никто не оставлял отзыв об этой компании и мы не знаем, работает она хорошо или плохо. Может быть вы расскажете свое мнение о ней?'
														},
													]
												},
												{
													elem: 'thumb',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/reviews/1.jpg' },
																}
															]
														}

													]
												},
												{
													elem: 'info',
													content: [
														{
															elem: 'company',
															content: 'Лаура-Архангельск'
														},
														{
															elem: 'position',
															content: 'Маркетолог'
														},
														{
															elem: 'date',
															content: '7 августа 2012'
														},
														{
															elem: 'name',
															content: 'Никка Милонова'
														}
													]
												},
												{
													elem: 'more',
													content: [
														{
															block: 'more-button',
															mods: { 'shadow': true },
															tag: 'a',
															attrs: { href: '#' },
															content: 'подробнее'
														}
													]
												}
											]
										},
										{
											block: 'reviews-list-item',
											content: [
												{
													elem: 'text',
													content: [
														{
															elem: 'cite',
															cls: 'js-dotted',
															content: 'Еще никто не оставлял отзыв об этой компании и мы не знаем, работает она хорошо или плохо. Может быть вы расскажете свое мнение о ней? Еще никто не оставлял отзыв об этой компании и мы не знаем, работает она хорошо или плохо. Может быть вы расскажете свое мнение о ней?'
														},
													]
												},
												{
													elem: 'thumb',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/reviews/1.jpg' },
																}
															]
														}

													]
												},
												{
													elem: 'info',
													content: [
														{
															elem: 'company',
															content: 'Лаура-Архангельск'
														},
														{
															elem: 'position',
															content: 'Маркетолог'
														},
														{
															elem: 'date',
															content: '7 августа 2012'
														},
														{
															elem: 'name',
															content: 'Никка Милонова'
														}
													]
												},
												{
													elem: 'more',
													content: [
														{
															block: 'more-button',
															mods: { 'shadow': true },
															tag: 'a',
															attrs: { href: '#' },
															content: 'подробнее'
														}
													]
												}
											]
										},
										{
											block: 'reviews-list-item',
											content: [
												{
													elem: 'text',
													content: [
														{
															elem: 'cite',
															cls: 'js-dotted',
															content: 'Еще никто не оставлял отзыв об этой компании и мы не знаем, работает она хорошо или плохо. Может быть вы расскажете свое мнение о ней? Еще никто не оставлял отзыв об этой компании и мы не знаем, работает она хорошо или плохо. Может быть вы расскажете свое мнение о ней?'
														},
													]
												},
												{
													elem: 'thumb',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/reviews/1.jpg' },
																}
															]
														}

													]
												},
												{
													elem: 'info',
													content: [
														{
															elem: 'company',
															content: 'Лаура-Архангельск'
														},
														{
															elem: 'position',
															content: 'Маркетолог'
														},
														{
															elem: 'date',
															content: '7 августа 2012'
														},
														{
															elem: 'name',
															content: 'Никка Милонова'
														}
													]
												},
												{
													elem: 'more',
													content: [
														{
															block: 'more-button',
															mods: { 'shadow': true },
															tag: 'a',
															attrs: { href: '#' },
															content: 'подробнее'
														}
													]
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