# 📖 Migration Guide - Рефакторинг страниц

## Как перевести существующие страницы на новую дизайн-систему

### Шаг 1: Анализ текущей страницы

Найдите повторяющиеся паттерны:

- Background decorations (3 div'а с декорациями)
- Back button
- Layout container
- Tag component
- Title/Header
- Description
- Cards/Options (список или сетка)

### Шаг 2: Замена imports

**Было:**

```tsx
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon, SomeIcon } from '@/components/Icons'
```

**Стало:**

```tsx
import { useRouter } from 'next/navigation'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionGrid, // или OptionList
  OptionButton,
} from '@/components/ui'
import { SomeIcon } from '@/components/Icons'
```

### Шаг 3: Замена Layout

**Было:**

```tsx
return (
  <div className='relative min-h-screen w-full bg-[#0a253a] overflow-x-hidden'>
    {/* Background decorations */}
    <div className='pointer-events-none fixed left-0 top-0 h-[1062px] w-[1054px] opacity-5' />
    <div className='pointer-events-none fixed left-[611.59px] top-[71.34px] h-[342.406px] w-[342.406px] rounded-full bg-[#67d39d] opacity-10 blur-[57.069px]' />
    <div className='pointer-events-none fixed left-[71.34px] top-[619.59px] h-[342.406px] w-[342.406px] rounded-full bg-[#55c1ff] opacity-10 blur-[57.069px]' />

    {/* Back button */}
    <button onClick={() => router.back()} className='...'>
      <ArrowLeftIcon />
      <p>Retour</p>
    </button>

    <div className='mx-auto flex min-h-screen w-full max-w-[920px] flex-col...'>
      {/* content */}
    </div>
  </div>
)
```

**Стало:**

```tsx
return (
  <PageLayout>
    <BackButton />
    <PageContainer>
      <PageSection>{/* content */}</PageSection>
    </PageContainer>
  </PageLayout>
)
```

**Экономия:** ~20 строк кода

### Шаг 4: Замена Header

**Было:**

```tsx
<div className='flex w-full flex-col items-center gap-[22px]'>
  <Tag txt="Configuration" />
  <h1 className="w-full max-w-[606px] whitespace-pre-wrap text-center font-['Poppins',sans-serif] text-4xl font-extrabold leading-[70px] text-white sm:text-[56px]">
    {`Quel est le `}
    <span className='text-[#67d29d]'>statut</span>
    {` ?`}
  </h1>
</div>

<p className="w-full max-w-[489px] whitespace-pre-wrap text-center font-['Poppins',sans-serif] text-base font-normal leading-[28.981px] text-white/80">
  Description text here
</p>
```

**Стало:**

```tsx
<PageHeader
  tag='Configuration'
  title={
    <>
      {`Quel est le `}
      <span className='text-[#67d29d]'>statut</span>
      {` ?`}
    </>
  }
  description='Description text here'
  maxWidth='606px' // опционально
/>
```

**Экономия:** ~15 строк кода

### Шаг 5: Замена Cards на OptionButton

**Было:**

```tsx
interface CardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

function Card({ icon, title, description, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className='group relative flex h-[136px] w-full items-center rounded-xl bg-white/8 px-8 py-4 transition-all duration-300 hover:scale-[1.02] hover:bg-white hover:shadow-[0px_10px_30px_-5px_rgba(0,0,0,0.3)]'>
      <div className='flex items-center gap-5'>
        <div className='flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors group-hover:bg-[#715aff]'>
          {icon}
        </div>
        <div className='flex flex-col items-start gap-[3px] text-left text-white'>
          <p className="font-['Poppins',sans-serif] text-base font-semibold leading-6 transition-colors group-hover:text-[#0a253a]">
            {title}
          </p>
          <p className="font-['Poppins',sans-serif] text-sm leading-5 transition-colors group-hover:text-black">
            {description}
          </p>
        </div>
      </div>
      <div className='absolute right-4 top-1/2 -translate-y-1/2'>
        <div className='h-6 w-6 opacity-30 transition-all group-hover:opacity-100'>
          <svg>...</svg>
        </div>
      </div>
    </button>
  )
}

// Usage
;<div className='grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-[35px]'>
  <Card icon={<Icon />} title='Title' description='Desc' onClick={handler} />
</div>
```

**Стало:**

```tsx
<OptionGrid>
  <OptionButton
    icon={<Icon className='text-white/60' />}
    title='Title'
    description='Desc'
    onClick={handler}
    variant='hover-white' // default | hover-white | hover-subtle
  />
</OptionGrid>
```

**Экономия:** ~40 строк кода на страницу

### Шаг 6: Выбор между OptionGrid и OptionList

**OptionGrid** - для сетки 2 колонки (как на главной странице):

```tsx
<OptionGrid>
  <OptionButton {...} />
  <OptionButton {...} />
  <OptionButton {...} />
  <OptionButton {...} />
</OptionGrid>
```

**OptionList** - для вертикального списка (как на dirigeant):

```tsx
<OptionList>
  <OptionButton {...} />
  <OptionButton {...} />
  <OptionButton {...} />
</OptionList>
```

### Шаг 7: Выбор variant для OptionButton

- **`default`** - простой hover без белого фона
- **`hover-white`** - белый фон при hover (по умолчанию)
- **`hover-subtle`** - subtle эффект (полупрозрачный hover)

```tsx
<OptionButton variant="hover-subtle" {...} />  // для dirigeant
<OptionButton variant="hover-white" {...} />   // для page.tsx
```

## Полный пример рефакторинга

### BEFORE (100+ строк):

```tsx
'use client'
import { useRouter } from 'next/navigation'
import { ArrowLeftIcon, Icon1, Icon2 } from '@/components/Icons'

interface TagProps {
  txt: string
}

function Tag({ txt }: TagProps) {
  return (
    <div className='flex items-center justify-center rounded-full bg-white/10 px-8 py-2'>
      <p className="font-['Poppins',sans-serif] text-xs font-bold text-white">{txt}</p>
    </div>
  )
}

interface CardProps {
  icon: React.ReactNode
  title: string
  description: string
  onClick: () => void
}

function Card({ icon, title, description, onClick }: CardProps) {
  return (
    <button
      onClick={onClick}
      className='group relative flex h-[136px] w-full items-center rounded-xl bg-white/8...'>
      {/* 30+ lines of markup */}
    </button>
  )
}

export default function MyPage() {
  const router = useRouter()

  return (
    <div className='relative min-h-screen w-full bg-[#0a253a] overflow-x-hidden'>
      {/* Background decorations - 3 divs */}

      {/* Back button */}
      <button onClick={() => router.back()} className='...'>
        <ArrowLeftIcon className='text-white' />
        <p>Retour</p>
      </button>

      {/* Main content */}
      <div className='mx-auto flex min-h-screen w-full max-w-[920px]...'>
        <div className='flex w-full flex-col items-center gap-[62px]'>
          <div className='flex w-full flex-col items-center gap-[22px]'>
            <Tag txt='Configuration' />
            <h1 className='...'>
              Mon <span className='text-[#67d29d]'>titre</span>
            </h1>
          </div>

          <p className='...'>Description</p>

          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2'>
            <Card
              icon={<Icon1 />}
              title='Option 1'
              description='Desc 1'
              onClick={() => router.push('/page1')}
            />
            <Card
              icon={<Icon2 />}
              title='Option 2'
              description='Desc 2'
              onClick={() => router.push('/page2')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
```

### AFTER (30-40 строк):

```tsx
'use client'
import { useRouter } from 'next/navigation'
import {
  PageLayout,
  PageContainer,
  PageSection,
  PageHeader,
  BackButton,
  OptionGrid,
  OptionButton,
} from '@/components/ui'
import { Icon1, Icon2 } from '@/components/Icons'

export default function MyPage() {
  const router = useRouter()

  return (
    <PageLayout>
      <BackButton />
      <PageContainer>
        <PageSection>
          <PageHeader
            tag='Configuration'
            title={
              <>
                Mon <span className='text-[#67d29d]'>titre</span>
              </>
            }
            description='Description'
          />

          <OptionGrid>
            <OptionButton
              icon={<Icon1 className='text-white/60' />}
              title='Option 1'
              description='Desc 1'
              onClick={() => router.push('/page1')}
            />
            <OptionButton
              icon={<Icon2 className='text-white/60' />}
              title='Option 2'
              description='Desc 2'
              onClick={() => router.push('/page2')}
            />
          </OptionGrid>
        </PageSection>
      </PageContainer>
    </PageLayout>
  )
}
```

**Результат:**

- ✅ 60-70% меньше кода
- ✅ Чище и читабельнее
- ✅ Легче поддерживать
- ✅ Консистентный дизайн

## Чеклист рефакторинга

- [ ] Заменить layout на PageLayout + PageContainer + PageSection
- [ ] Заменить back button на BackButton
- [ ] Заменить header/title на PageHeader
- [ ] Удалить локальные компоненты Tag/Card
- [ ] Заменить cards на OptionButton
- [ ] Выбрать OptionGrid или OptionList
- [ ] Выбрать правильный variant
- [ ] Удалить неиспользуемые imports
- [ ] Протестировать страницу
- [ ] Проверить responsive design

## Приоритет рефакторинга

### Высокий (часто используются):

1. salary-employees/\* страницы
2. legal-form/\* страницы
3. retraite-indtpt/\* страницы

### Средний:

4. other-situations/\* страницы
5. coverage-type страница

### Низкий:

6. result страницы (если есть кастомный дизайн)

## Помощь и вопросы

См. полную документацию в `DESIGN-SYSTEM.md` или примеры в:

- `src/app/page.tsx`
- `src/app/dirigeant/page.tsx`
- `src/app/employee-count/page.tsx`
- `src/app/company-status/page.tsx`
