import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { CollectionCard } from '@/components/CollectionCard';
import { NewsletterSection } from '@/components/NewsletterSection';
import { EcommerceTemplate } from '@/templates/EcommerceTemplate';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';
import { useState } from 'react';

/**
 * EDITABLE UI - IndexUI
 * 
 * Minimal Japanese-inspired pet wellness store homepage
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  const {
    collections,
    loading,
    loadingCollections,
    selectedCollectionId,
    filteredProducts,
    handleViewCollectionProducts,
    handleShowAllProducts,
  } = logic;

  const [petType, setPetType] = useState<'all' | 'dog' | 'cat'>('all');
  const [ageStage, setAgeStage] = useState<'all' | 'puppy' | 'adult' | 'senior'>('all');

  // Filter products based on selections
  const displayProducts = filteredProducts.filter(product => {
    if (petType !== 'all') {
      const hasPetTag = product.tags?.includes(petType);
      if (!hasPetTag) return false;
    }
    if (ageStage !== 'all') {
      const hasAgeTag = product.tags?.includes(ageStage);
      if (!hasAgeTag) return false;
    }
    return true;
  });

  return (
    <EcommerceTemplate showCart={true}>
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
        <img 
          src="/src/assets/hero-pets.jpg" 
          alt="Pet Wellness" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-xl space-y-6">
            <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight leading-tight">
              Natural
              <br />
              <span className="font-normal">Pet Wellness</span>
            </h1>
            <p className="text-lg text-muted-foreground font-light">
              Premium nutrition and supplements crafted with care for your companion's health and vitality
            </p>
            <Button 
              size="lg" 
              className="mt-6"
              onClick={() => {
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Products
            </Button>
          </div>
        </div>
      </section>

      {/* Pet & Age Selector */}
      <section className="py-16 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light text-foreground mb-3">Find What's Right</h2>
            <p className="text-muted-foreground">Select your pet type and life stage</p>
          </div>
          
          <div className="max-w-2xl mx-auto space-y-8">
            {/* Pet Type Selector */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Pet Type</label>
              <div className="grid grid-cols-3 gap-3">
                <button
                  onClick={() => setPetType('all')}
                  className={`py-4 px-6 border transition-all ${
                    petType === 'all' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  All Pets
                </button>
                <button
                  onClick={() => setPetType('dog')}
                  className={`py-4 px-6 border transition-all ${
                    petType === 'dog' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  Dogs
                </button>
                <button
                  onClick={() => setPetType('cat')}
                  className={`py-4 px-6 border transition-all ${
                    petType === 'cat' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  Cats
                </button>
              </div>
            </div>

            {/* Age Stage Selector */}
            <div>
              <label className="block text-sm font-medium text-foreground mb-3">Life Stage</label>
              <div className="grid grid-cols-4 gap-3">
                <button
                  onClick={() => setAgeStage('all')}
                  className={`py-4 px-6 border transition-all ${
                    ageStage === 'all' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  All Ages
                </button>
                <button
                  onClick={() => setAgeStage('puppy')}
                  className={`py-4 px-6 border transition-all ${
                    ageStage === 'puppy' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  Puppy/Kitten
                </button>
                <button
                  onClick={() => setAgeStage('adult')}
                  className={`py-4 px-6 border transition-all ${
                    ageStage === 'adult' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  Adult
                </button>
                <button
                  onClick={() => setAgeStage('senior')}
                  className={`py-4 px-6 border transition-all ${
                    ageStage === 'senior' 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  Senior
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      {!loadingCollections && collections.length > 0 && (
        <section id="collections" className="py-16 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-light text-foreground mb-3">Shop by Category</h2>
              <p className="text-muted-foreground">Curated collections for your pet's needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {collections.map((collection) => (
                <CollectionCard 
                  key={collection.id} 
                  collection={collection} 
                  onViewProducts={handleViewCollectionProducts} 
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section */}
      <section id="products" className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-light text-foreground mb-2">
                {selectedCollectionId 
                  ? collections.find(c => c.id === selectedCollectionId)?.name || 'Products'
                  : 'All Products'
                }
              </h2>
              {(petType !== 'all' || ageStage !== 'all') && (
                <p className="text-sm text-muted-foreground">
                  Filtered by: {petType !== 'all' && petType} {ageStage !== 'all' && ageStage}
                </p>
              )}
            </div>
            {selectedCollectionId && (
              <Button 
                variant="outline" 
                onClick={handleShowAllProducts}
              >
                View All
              </Button>
            )}
          </div>
          
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="bg-muted/30 h-96 animate-pulse" />
              ))}
            </div>
          ) : displayProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {displayProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No products match your selection. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </EcommerceTemplate>
  );
};