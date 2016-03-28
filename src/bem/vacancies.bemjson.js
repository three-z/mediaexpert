({
	block: 'template-page',
	title: 'Вакансии',
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
							content: 'Компания'
						},
						{
							url: '#',
							content: 'Вакансии'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Вакансии',
					underline: true
				},
				{
					block: 'vacancies',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'vacancies-list',
									content: [
										{
											block: 'vacancies-list-item',
											content: [
												{
													elem: 'title',
													cls: 'js-dotted',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: 'Руководитель ревизионного отдела'
														}
													]
												},
												{
													elem: 'date',
													content: '10.12.15'
												},
												{
													elem: 'text',
													content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
												},
												{
													elem: 'more',
													content: [
														{
															tag: 'a',
															block: 'more-button',
															attrs: { href: '#' },
															content: 'подробнее'
														}
													]
												}
											]
										},
										{
											block: 'vacancies-list-item',
											content: [
												{
													elem: 'title',
													cls: 'js-dotted',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: 'Руководитель ревизионного отдела'
														}
													]
												},
												{
													elem: 'date',
													content: '10.12.15'
												},
												{
													elem: 'text',
													content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
												},
												{
													elem: 'more',
													content: [
														{
															tag: 'a',
															block: 'more-button',
															attrs: { href: '#' },
															content: 'подробнее'
														}
													]
												}
											]
										},
										{
											block: 'vacancies-list-item',
											content: [
												{
													elem: 'title',
													cls: 'js-dotted',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: 'Руководитель ревизионного отдела'
														}
													]
												},
												{
													elem: 'date',
													content: '10.12.15'
												},
												{
													elem: 'text',
													content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
												},
												{
													elem: 'more',
													content: [
														{
															tag: 'a',
															block: 'more-button',
															attrs: { href: '#' },
															content: 'подробнее'
														}
													]
												}
											]
										},
										{
											block: 'vacancies-list-item',
											content: [
												{
													elem: 'title',
													cls: 'js-dotted',
													content: [
														{
															tag: 'a',
															attrs: { href: '#' },
															content: 'Руководитель ревизионного отдела'
														}
													]
												},
												{
													elem: 'date',
													content: '10.12.15'
												},
												{
													elem: 'text',
													content: 'Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено. Энергоснабжение Южной Осетии восстановлено.'
												},
												{
													elem: 'more',
													content: [
														{
															tag: 'a',
															block: 'more-button',
															attrs: { href: '#' },
															content: 'подробнее'
														}
													]
												}
											]
										}
									]
								}
							]
						}
					]
				}
			]
		}
	]
})