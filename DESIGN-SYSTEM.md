# Дизайн-система Novea Simulator

## Обзор

Единая дизайн-система для всех страниц симулятора здоровья Novea с фокусом на адаптивность и консистентность.

## 🎨 Цветовая палитра

```css
--background: #0a253a /* Основной фон */ --foreground: #ffffff /* Основной текст */
  --accent-green: #67d39d /* Акцентный зеленый */ --accent-blue: #55c1ff /* Акцентный синий */
  --accent-purple: #715aff /* Акцентный фиолетовый (hover) */;
```

## 📐 Макет страницы

### Фон

Все страницы используют единый фон:

- Основной цвет: `#0a253a`
- Декоративные элементы:
  - Зеленый блюр (top-right): `#67d39d` с opacity 10%
  - Синий блюр (bottom-left): `#55c1ff` с opacity 10%

### Контейнер контента

```tsx
<div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col items-center justify-center px-4 py-20 sm:px-8 lg:py-[149px]'>
  {/* Content */}
</div>
```

### Кнопка "Назад"

```tsx
<button className='fixed left-4 top-8 z-10 flex h-[21px] items-center gap-2 opacity-70 transition-opacity hover:opacity-100 sm:left-8 lg:left-[62px] lg:top-[40px]'>
  <ArrowLeftIcon className='h-5 w-5 text-white sm:h-6 sm:w-6' />
  <p className="font-['Poppins',sans-serif] text-center text-xs font-medium leading-[21px] text-white sm:text-sm">
    Retour
  </p>
</button>
```

## 📱 Адаптивные точки останова

```css
/* Mobile */
< 640px: базовые размеры (text-3xl, px-4, gap-5)

/* Tablet */
640px - 1024px: средние размеры (text-4xl, px-8, gap-10)

/* Desktop */
> 1024px: полные размеры (text-[56px], lg:px-[149px], gap-[62px])
```

## 🔤 Типографика

### Шрифты

- **Основной**: Poppins (400, 500, 600, 700, 800)
- **Дополнительный**: DM Sans (400, 500, 600, 700)

### Заголовки

```tsx
// H1 - Основной заголовок
<h1 className="font-['Poppins',sans-serif] text-3xl sm:text-4xl lg:text-[56px] font-extrabold leading-tight sm:leading-[60px] lg:leading-[70px] text-white">

// Описание
<p className="font-['DM_Sans',sans-serif] text-sm sm:text-base leading-relaxed sm:leading-[28.981px] text-white/80">
```

### Теги

```tsx
<div className='flex shrink-0 flex-col items-center justify-center rounded-full bg-white/10 px-[31px] py-[9px]'>
  <p className="font-['Poppins',sans-serif] text-center text-[12.484px] font-bold leading-[17.834px] text-white">
    Configuration
  </p>
</div>
```

## 🎴 Компоненты

### OptionCard (Универсальная карточка)

```tsx
<OptionCard icon={<UsersIcon />} title='Title' description='Description' onClick={handleClick} />
```

Особенности:

- Адаптивные размеры: h-[136px]
- Padding: `px-6 sm:px-8 lg:px-[35px]`
- Иконка: `h-10 w-10 sm:h-12 sm:w-12`
- Hover: масштаб 1.02, белый фон, тень
- Иконка галочки (checkmark) справа

### PageLayout (Общий макет)

```tsx
<PageLayout showBackButton={true} onBack={handleBack}>
  {/* Content */}
</PageLayout>
```

### PageHeader (Заголовок страницы)

```tsx
<PageHeader
  tag='Configuration'
  title={
    <>
      Combien de <span className='text-[#67d29d]'>salariés</span> ?
    </>
  }
  description='Optional description'
/>
```

## 🎯 Иконки

Все иконки адаптивные:

```tsx
// Базовый размер: 20x20
<UsersIcon className='h-5 w-5 sm:h-6 sm:w-6 text-white' />
```

Доступные иконки:

- `BriefcaseIcon`
- `UsersIcon`
- `UserSingleIcon`
- `UserGroupIcon`
- `BuildingIcon`
- `HeartIcon`
- `PersonIcon`
- `ArrowRightIcon`
- `ArrowLeftIcon`
- `SuitcaseIcon`
- `BuildingColumnsIcon`
- `DocumentIcon`
- `TractorIcon`
- `HeartHandIcon`
- `QuestionIcon`

## 🔄 Анимации и переходы

```css
/* Hover карточек */
transition-all duration-300
hover:scale-[1.02]
hover:bg-white
hover:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)]

/* Hover иконок в карточках */
group-hover:bg-[#715aff]
group-hover:text-[#0a253a]

/* Opacity */
opacity-70 hover:opacity-100
```

## 📋 Сетки

### Двухколоночная сетка (например, company-status)

```tsx
<div className='grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:gap-[35px]'>{/* Cards */}</div>
```

### Одноколоночная сетка (например, coverage-type)

```tsx
<div className='flex flex-col gap-3'>{/* Cards */}</div>
```

## ✅ Чеклист для новой страницы

- [ ] Использовать `PageLayout` для обертки
- [ ] Добавить кнопку "Назад" через `showBackButton`
- [ ] Использовать `PageHeader` для заголовка
- [ ] Контент центрирован через `flex-col items-center`
- [ ] Адаптивные классы для всех элементов (sm:, lg:)
- [ ] Иконки с правильными размерами (h-5 w-5 sm:h-6 sm:w-6)
- [ ] Тексты с адаптивными размерами (text-3xl sm:text-4xl lg:text-[56px])
- [ ] Отступы адаптивные (gap-5 sm:gap-10 lg:gap-[62px])
- [ ] Hover эффекты на всех интерактивных элементах

## 🚀 Примеры использования

### Простая страница с выбором

```tsx
'use client'
import { useRouter } from 'next/navigation'
import PageLayout from '@/components/PageLayout'
import PageHeader from '@/components/PageHeader'
import OptionCard from '@/components/OptionCard'
import { UsersIcon } from '@/components/Icons'

export default function MyPage() {
  const router = useRouter()

  return (
    <PageLayout showBackButton onBack={() => router.back()}>
      <div className='flex w-full flex-col items-center gap-10 sm:gap-12 lg:gap-[62px]'>
        <PageHeader
          tag='Configuration'
          title={
            <>
              Your <span className='text-[#67d29d]'>Question</span>?
            </>
          }
          description='Optional description here'
        />

        <div className='flex w-full flex-col items-center gap-3'>
          <OptionCard
            icon={<UsersIcon />}
            title='Option 1'
            description='Description 1'
            onClick={() => handleSelect('option1')}
          />
          <OptionCard
            icon={<UsersIcon />}
            title='Option 2'
            description='Description 2'
            onClick={() => handleSelect('option2')}
          />
        </div>
      </div>
    </PageLayout>
  )
}
```

## 📱 Мобильная оптимизация

- Минимальная ширина контента: 320px
- Максимальная ширина контента: 920px
- Вертикальные отступы на мобильных: py-20
- Горизонтальные отступы на мобильных: px-4
- Размер шрифта базовый на мобильных: 14px
- Overflow-x: hidden на всех страницах
