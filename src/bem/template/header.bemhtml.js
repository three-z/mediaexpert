block('template-header').replace()(function() {
	var ctx = this.ctx;

	return [
		{
			block: 'top-line',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'site-title',
									content: 'Медиа Эксперт Вашего Бизнеса'
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'social-links',
									content: [
										{
											elem: 'list',
											content: [
												{
													elem: 'item',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'В'
														}
													]
												},
												{
													elem: 'item',
													content: [
														{
															elem: 'link',
															tag: 'a',
															attrs: { href: '#' },
															content: 'f'
														}
													]
												}
											]
										}
									]
								},
								{
									block: 'leave-request',
									content: [
										{
											elem: 'button',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Оставить заявку'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'header',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container' },
					content: [
						{
							elem: 'layout-left',
							content: [
								{
									block: 'logo',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: [
												{
													elem: 'image',
													tag: 'img',
													attrs: { src: 'img/logo.png' },
												}
											]
										}
									]
								}
							]
						},
						{
							elem: 'layout-center',
							content: [
								{
									block: 'site-address',
									content: 'г. Архангельск, ул. Попова, д. 6'
								},
								{
									block: 'site-slogan',
									content: 'Производство и размещение аудио и видео роликов'
								}
							]
						},
						{
							elem: 'layout-right',
							content: [
								{
									block: 'site-phone',
									content: '<small>+7(8182)</small> 65-79-70, 65-79-80'
								},
								{
									block: 'callback',
									content: [
										{
											elem: 'button',
											tag: 'a',
											cls: 'fancybox',
											attrs: { href: '#callback-popup' },
											content: 'Заказать звонок'
										}
									]
								}
							]
						}
					]
				}
			]
		},
		{
			block: 'navigation',
			content: [
				{
					elem: 'layout',
					mix: { block: 'container', mods: { 'no-padding': true } },
					content: [
						{
							elem: 'list',
							content: [
								{
									elem: 'item',
									mods: { 'active': true },
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Главная'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Компания'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Реклама на телевидении'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Реклама на радио'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Новости'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Отзывы'
										}
									]
								},
								{
									elem: 'item',
									content: [
										{
											elem: 'link',
											tag: 'a',
											attrs: { href: '#' },
											content: 'Контакты'
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
});