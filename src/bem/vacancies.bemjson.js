({
	block: 'template-page',
	title: 'Вакансии',
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
													content: 'Компания'
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
													content: 'Вакансии'
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
									content : 'Вакансии'
								}
							]
						}
					]
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