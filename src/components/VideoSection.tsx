const VideoSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Separator */}
        <div className="w-full h-px bg-border mb-12" />

        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-foreground">
          Check out crazy tracks
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-6">
            {/* Video placeholder */}
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">IKKA: Interview</h3>
                <p className="text-sm text-white/70">Video Player</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h3 className="text-xl font-bold mb-4 text-foreground">
              IKKA: Interview
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Fab Entertainment presents the official video of the song "Interview", 
              based on Ikka's real life story.
            </p>
            <p className="text-muted-foreground text-xs mt-4 leading-relaxed">
              Song : Interview | Artist : Ikka | Lyrics : Ikka | Composition: Ikka | 
              Producer : Arun Tanwar | Music By : JSL | Directed By : Inflict | 
              D.O.P : Vishal Anand | Label : Fab Entertainment | Production : Purple Sparks Media | 
              Online Promotion: ST Network
            </p>
          </div>
        </div>

        {/* Separator */}
        <div className="w-full h-px bg-border mt-12" />
      </div>
    </section>
  );
};

export default VideoSection;
