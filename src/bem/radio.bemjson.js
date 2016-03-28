({
	block: 'template-page',
	title: 'Реклама на радио',
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
							content: 'Реклама на радио'
						}
					]
				},
				{
					block: 'template-page-title',
					title : 'Оформить заявку',
					underline: true
				},
				{
					block: 'radio',
					content: [
						{
							elem: 'layout',
							mix: { block: 'container' },
							content: [
								{
									block: 'template-request-form'
								},
								{
									block: 'radio-list',
									content: [
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/1.png',
											title: 'реклама на радиостанции',
											subtitle: 'Европа Плюс',
										},
										{
											url: '#',
											thumb: 'img/tmp/on-radio/2.png',
											title: 'реклама на радиостанции',
											subtitle: 'Русское Радио',
										}
									].map(function(item) {
										return {
											block: 'radio-list-item',
											content: [
												{
													tag: 'a',
													attrs: { href: item.url },
													content : [
														{
															elem: 'thumb',
															content: [
																{
																	tag: 'img',
																	attrs: { src: item.thumb },
																}
															]
														},
														{
															elem: 'title',
															content: item.title
														},
														{
															elem: 'sub-title',
															content: item.subtitle
														}
													]
												}
											]
										};
									})
								}
							]
						}
					]
				},
				{
					block : 'template-last-reclam'
				},
				{
					block : 'template-last-news'
				},
				{
					block : 'template-clients'
				}
			]
		}
	]
})