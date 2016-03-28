({
	block: 'template-page',
	title: 'Оформить заявку',
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
													content: 'Реклама на телевидении'
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
													content: 'Рекламные ролики'
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
					block: 'video',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									elem: 'title',
									cls: 'js-gradient',
									content: 'Оформить заявку'
								},
								{
									elem: 'content',
									content: [
										{
											block: 'request-form',
											content: [
												{
													tag: 'form',
													elem: 'form',
													content: [
														{
															tag: 'input',
															elem: 'input',
															attrs: { type: 'text', placeholder: 'Ваше имя' }
														},
														{
															tag: 'input',
															elem: 'input',
															attrs: { type: 'text', placeholder: 'Компания' }
														},
														{
															tag: 'input',
															elem: 'input',
															mods: { 'small': true },
															attrs: { type: 'text', placeholder: 'Телефон' }
														},
														{
															tag: 'input',
															elem: 'input',
															mods: { 'small': true },
															attrs: { type: 'text', placeholder: 'E-mail' }
														},
														{
															tag: 'input',
															elem: 'button',
															attrs: { type: 'submit', placeholder: 'Отправить' }
														}
													]
												}
											]
										},
										{
											block: 'video-list',
											content: [
												{
													elem: 'list',
													content: [
														{
															elem: 'item',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/video/1.jpg' },
																}
															]
														},
														{
															elem: 'item',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/video/2.jpg' },
																}
															]
														},
														{
															elem: 'item',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/video/1.jpg' },
																}
															]
														},
														{
															elem: 'item',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/video/2.jpg' },
																}
															]
														},
														{
															elem: 'item',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/video/1.jpg' },
																}
															]
														},
														{
															elem: 'item',
															content: [
																{
																	elem: 'image',
																	tag: 'img',
																	attrs: { src: 'img/tmp/video/2.jpg' },
																}
															]
														}
													]
												}
											]
										},
										{
											elem: 'back',
											content: [
												{
													tag: 'a',
													elem: 'back-link',
													attrs: { href: '#' },
													content: '← назад'
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